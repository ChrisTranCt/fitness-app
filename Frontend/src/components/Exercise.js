import {useState, useEffect} from 'react'
import React from 'react'
import Button from './Button'
import AddExercise from './AddExercise'
import {GetExercises,PostExercises,PutExercises,DeleteExercises} from './CRUD/CrudFunctions'
// import {UserDisplay} from '../Routes/UserProfile'
import {useNavigate} from 'react-router-dom';

export const SearchExercise=()=>{
  const navigate=useNavigate();
  
  const[muscle,setMuscle]=useState('abdominals')
  const[difficulty,setDifficulty]=useState('beginner')
  const[info,setInfo]=useState([])
  const[check,setCheck]=useState([])
  const[userData,setUserData]=useState([])  
  const[Add,setAdd]=useState([])
  const[submission,setSubmission]=useState(false)
  var page=0;

  
  function grab(){
    
    let options = {
      // method: 'GET',
      headers: { 'x-api-key': process.env.REACT_APP_API_KEY}
    }
    let url = `https://api.api-ninjas.com/v1/exercises?muscle=${muscle}&difficulty=${difficulty}&offset=${page}`
    fetch(url,options)
          .then(res => res.json()) // parse response as JSON
          .then(data => {
            displayText(data)
            console.log(`The token is:${localStorage.getItem("username")}`)
            // console.log(`the muscle group is ${muscle} and the difficulty is ${difficulty}`)
          })
          .catch(err => {
            console.error(err)
          }); 
          return false  
        }
    function searchSubmit (e){
      // document.querySelector
      e.preventDefault()
      var tempExercise=[]
      for(const exerciseData of info){
        if (exerciseData.add===true){
          var exerciseObject=({
            'name':`${exerciseData.name}`,
            'description':`${exerciseData.instructions}`
          })
          tempExercise.push(exerciseObject)
        }
        
        setAdd(tempExercise)
      }
      const get=async()=>{
        try{
          const data= await GetExercises();
          setUserData(data)
          setSubmission(true)
        }
        catch(error){
          console.log(error)
        }
      }
      get();

  }
  useEffect(()=>{
    
      
    const put = async()=>{
      try {
        var data=await PutExercises(Add)
      } catch (error) {
        console.log(error)
      }
    }
      const post=async()=>{
        
        try{
         var data= await PostExercises(Add);
        }
        catch(error){
          console.log(error)
        }
      }
      
  
    
    
    if(userData.length>0&&submission===true){
    put();
    }
    else if(userData.length===0&&submission===true){
      post();
    }
  },[userData,submission])
    function onSubmit(e){
      
      e.preventDefault();
      document.getElementById("addd").style.visibility=("visible")
      document.getElementById("thesub").style.visibility=("visible")
      if(page===0){
        document.querySelector("#addd").addEventListener('click',goNext)
      }
      
            grab();
          }
          function goNext(e){
            e.preventDefault();
            incPage()
            console.log(page)
             
              // clear the line
            document.getElementById('links').innerHTML="";

              grab();
            }
          const incPage=()=>{
            page++;
            // setPage(prevpage=>prevpage+1)
          }
    const displayText=(data)=>{
      // console.log(data)
      
      for (var i=0;i<data.length;i++){
        var loc=i+1;
        data[i].id=`${loc}`
        data[i].add=false
        
      }
      setInfo(data);
      // const ar=exercises.map(data=>data)
      // setInfo(...prevInfo,)
    }
    useEffect(() => {
      
      document.querySelector("#thesub").addEventListener('click',searchSubmit)
      
    }, [info]);

    return(
      <div>
        <form>
        {/* <input type='text' value={text}  onSubmit={onSubmit} 
        onChange={(e)=>setText(e.target.value)}>
      </input> */}
      {/* <p>Search an exercise by muscle group:</p><br></br>
        <p>Choose a muscle group:</p> */}
    <select name="Muscles Groups" id="muscles" value={muscle}  onSubmit={onSubmit} 
        onChange={(e)=>setMuscle(e.target.value)}> 
        <option value="Abdonominals">Abdonominals</option> 
        <option value="Abductors">Abductors</option> 
        <option value="Biceps">Biceps</option> 
        <option value="Calves">Calves</option> 
        <option value="Chest">Chest</option> 
        <option value="Forearms">Forearms</option> 
        <option value="Glutes">Glutes</option> 
        <option value="Hamstrings">Hamstrings</option> 
        <option value="Lats">Lats</option> 
        <option value="Lower Back">Lower Back</option> 
        <option value="Middle Back">Middle Back</option> 
        <option value="Neck">Neck</option> 
        <option value="Quadriceps">Quadriceps</option> 
        <option value="Traps">Traps</option> 
        <option value="Triceps">Triceps</option>
    </select>
    <select name="Muscles Groups" id="difficulty" value={difficulty}  onSubmit={onSubmit} 
        onChange={(e)=>setDifficulty(e.target.value)}> 
        <option value="beginner">beginner</option> 
        <option value="intermediate">intermediate</option> 
        <option value="expert">Expert</option>  
        </select>
    
        <Button id="main" onClick={onSubmit} text="Search"/>
        {/* <Button id="main" onClick={onSubmit} text="Search"/> */}


        </form>
        {info.length===10&&<AddExercise exercise={info} check={check}setCheck={setCheck}/>}
         {/* <UserDisplay /> */}
        {/* {console.log(info[9].name)} */}
        </div>
    );
}

export default SearchExercise