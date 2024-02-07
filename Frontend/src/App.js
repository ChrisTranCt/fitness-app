import './App.css';
import SearchExercise from './components/Exercise';
import Button from './components/Button'
import Add from './components/Add';
import { useState } from "react";
import Check from './components/Check'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Routes/Layout'
import Register from './Routes/Register'
import UserLogin from './Routes/UserLogin'
import ReactDOM from "react-dom/client";
import UserDisplay from './Routes/UserProfile'

const App=()=> {
  const[info,setInfo]=useState([])
  // const[token,setToken]=useState(null)
  const username=null;
    document.getElementById("addd").style.visibility=("hidden")
    console.log( document.getElementById("thesub"))
    document.getElementById("thesub").style.visibility=("hidden")
    
    
  
  return (
    
      <Router>
        <Layout/>
        <Routes>
      {/* <Route path='/' element={<Layout/>}/>
      <Route index element={<SearchExercise/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Login' element={<userLogin/>}/> */}

      <Route path='/Search' element={<SearchExercise />}/>
      <Route path='/UserLogin'element={<UserLogin username={username}/>}/>
      <Route path='/Register' element={<Register />}/>
      <Route path='/UserDisplay' element={<UserDisplay />}/>
      {/* <Route path='/Profile' element={<UserProfile/>}/> */}
    </Routes>
    </Router>
  );
}
export default App;
