import React from 'react';

const UsersList = ( { users, deleteUser, updateUser } ) => {
    // console.log(users)
    return (
        <ul className='UsersList'>
            {users.map(user => (
                <li key={user.id}  className='userCard'>
                    <div className='userData'>
                        <h2> { user.first_name } { user.last_name } </h2>
                        <h4> { user.email } </h4>
                        <h4> { <i class="fa-solid fa-cake-candles"></i> }  { user.birthday } </h4>
                    </div>
                    <div className='buttons' >
                        <button  onClick={() => deleteUser(user)} > {<i class="fa-solid fa-trash"></i>}</button>
                        <button onClick={() => updateUser(user)}> {<i class="fa-solid fa-pencil"></i>} </button>
                    </div>
                </li>
            ))} 
        </ul>
    );
};

export default UsersList;