import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import UsersList from './Components/UsersList';
import UsersForm from './Components/UsersForm';

function App() {

  const [ users, setUsers ] = useState( [  ] )
  const [ userSelected, setUserSelected ] = useState({})
  // const [ userToDelete, setUserToDelete ] = useState({})

  useEffect(() => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then(answ => setUsers(answ?.data)
      )
  },[]);

  const getUsers = () => {       //Esta funcion renderizara de nuevo la pagina con los usuarios actualizados
     axios                         //despues de haber agregado uno
       .get("https://users-crud1.herokuapp.com/users/")
       .then(answ => setUsers(answ?.data))
  };


  const deleteUser = user => {
    axios
      .delete(`https://users-crud1.herokuapp.com/users/${user.id}/`)   //Con este método elimino el usuario al que corresponda el id
      .then(() => 
        getUsers()    //Despues de hacer la peticion de eliminar llamo la función para renderizar de nuevo los usuarios que haya en la Api
      )
    // console.log(user?.id)
  }

  const updateUser = user => {
    setUserSelected(user)
    axios
      .delete(`https://users-crud1.herokuapp.com/users/${user.id}/`)
      .put(`https://users-crud1.herokuapp.com/users/${user.id}/`, user )
      .then(() => getUsers())
    console.log(userSelected)
  }

  // deleteUser()
  // const selectUser = user => setUserSelected(user);

  // sconsole.log(users);

  return (
    <div className="App">
      < UsersForm 
        userSelected = {userSelected}
        // setUserSelected = {setUserSelected}
        getUsers = {getUsers}
      />

      < UsersList  
        users = {users} 
        setUserSelected = {setUserSelected}
        deleteUser = { deleteUser }
        // setUserToDelete = {setUserToDelete}
        updateUser = {updateUser}
      />

    </div>
  );
}

export default App;
