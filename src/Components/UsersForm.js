import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

const UsersForm = ( { getUsers,  userSelected } ) => {

    const [ firstName, setFirstName ] = useState( "fisrt name" );
    const [ lastName, setLastName ] = useState( "last name" );
    const [ email, setEmail ] = useState( "email" );
    const [ password, setPasword ] = useState( "password" );
    const [ birthday, setBirthday ] = useState( "2000-01-01" );

    // console.log(userSelected)

    const submit = e => {
        e.preventDefault();      //con este método seevita la renderización de la pagina cuando se de clic
        console.log( "se detecto clic en submit" );
        const newUser = {
            email,
            password,
            first_name: firstName,
            last_name: lastName,
            birthday
        }
        // console.log(newUser);
        axios.post('https://users-crud1.herokuapp.com/users/', newUser)
            .then(() => {
                getUsers();
                setFirstName("");
                setLastName("");
                setEmail("");
                setPasword("");
                setBirthday("2000-01-01");
            })   
    }

    useEffect(() => {
        console.log(userSelected)
        setFirstName(userSelected.first_name);
        setLastName(userSelected.last_name);
        setEmail(userSelected.email);
        setPasword(userSelected.password);
        setBirthday(userSelected.birthday);
     },[userSelected]);

    return (
        <form className="userForm" onSubmit={submit}>
            <p> <b>NEW USER</b> </p>
            <section className="inputContainerNewUser">
                <label htmlFor="fistName">  <i class="fa-solid fa-user"></i> </label>
                <input 
                    type="text"
                    value={ firstName }
                    onChange = {e => setFirstName(e.target.value)} 
                />
                <input 
                    type="text" 
                    value={lastName }
                    onChange = { e => setLastName(e.target.value) }
                />
            </section>

            <section className="inputContainer">
                <label htmlFor="email"> <i class="fa-solid fa-envelope"></i> </label>
                <input 
                    type="text" 
                    value={email}
                    onChange = { e => setEmail(e.target.value) }
                />
            </section>

            <section className="inputContainer">
                <label htmlFor="password"> <i class="fa-solid fa-lock"></i> </label>
                <input 
                    type="text" 
                    value={ password }
                    onChange = { e => setPasword(e.target.value) }
                />
            </section>

            <section className="inputContainer">
                <label htmlFor="date"> <i class="fa-solid fa-cake-candles"> </i> </label>
                <input 
                    type="date"
                    value= { birthday } 
                    onChange = { e => setBirthday( e.target.value ) }
                />
            </section>
            <button className="uploadButton" onClick={submit} >Submit</button>
        </form>
    );
};

export default UsersForm;