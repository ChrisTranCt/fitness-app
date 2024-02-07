import {useNavigate} from 'react-router-dom';
import React, { useState } from 'react';


const UserLogin=()=>{
    const navigate = useNavigate();

    function onSubmit(e){
        e.preventDefault();
        const email=document.getElementById("email").value
        const username=document.getElementById("username").value
        const password=document.getElementById("password").value
        // console.log(email,username,password)]
        const acc=(
            {
            "username":`${username}`,
            "password":`${password}`,
            "email":`${email}`,
            }
        )
        const d=JSON.stringify(acc)
        fetch('http://localhost:5000/api/users/login',{
            method:"POST",
            headers: {
    "Content-Type": "application/json"
  },
            body:JSON.stringify(acc)
        })

        // Parse the response as JSON
        .then(response => response.json())

        // Log the response to the console
        .then(data => 
            {
                localStorage.setItem("username",data.username)
                
                navigate('/UserDisplay')
            })

        // Handle any errors
        .catch(error => console.log(error));
    }
    return(
        
        <form id="LoginForm" >
            <h1>Sign In</h1>
            <label>Email: </label>
            <input type="text" id="email"></input>
            <br></br>
            <label>Username: </label>
            <input type="text" id="username"></input>  
            <br></br>
            <label>Password: </label>
            <input type="password" id="password"></input>
            <br></br>
            <button onClick={onSubmit}>Login</button>
        </form>
    )
}
export default UserLogin