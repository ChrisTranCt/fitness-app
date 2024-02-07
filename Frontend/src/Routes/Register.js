import {useNavigate} from 'react-router-dom';
import { PostExercises } from '../components/CRUD/CrudFunctions';
const Register=()=>{
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
        
        fetch('http://localhost:5000/api/users/',{
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
            PostExercises([]);
            navigate('/UserLogin')
            
            console.log(data)
            })

        // Handle any errors
        .catch(error => console.log(error));
    }
    return(
        <form id="RegisterForm" >
            <h1>Register</h1>
            <label>Email: </label>
            <input type="text" id="email"></input>
            <br></br>
            <label>Username: </label>
            <input type="text" id="username"></input>  
            <br></br>
            <label>Password: </label>
            <input type="text" id="password"></input>
            <br></br>
            <button onClick={onSubmit}>Register</button>
        </form>
    )
}
export default Register