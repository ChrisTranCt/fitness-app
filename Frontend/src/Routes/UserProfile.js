import {DeleteExercises, GetExercises} from '../components/CRUD/CrudFunctions'
import React, {useState, useEffect} from 'react'
import '../App.css'
const UserDisplay=()=>{

  const [information,setInformation]=useState([])
  const [remove,setRemove]=useState([])
  const [check,setCheck]=useState([])
  function RemoveExercise(exercise){
    exercise.delete=!exercise.delete
    updateCheck(exercise.name)
  }
  function updateCheck(id){
    console.log(id)
    if(check.includes(id)===false){
      setCheck(prevArray=>[...prevArray,id])
    }
    else{
      var updatedArray=[]
      for(const name of check){
        if(name!==id)
        updatedArray.push(name)
      }
      setCheck(updatedArray)
    }
      
    
    
  }
  useEffect(()=>{
  },[check])

  function Submit(){
    information[0].exercises.forEach(exercise=>{
      if(exercise.delete===true){
      var exerciseObject=({
        'name':`${(exercise.name)}`,
        'description':`${(exercise.description)}`
      })
      setRemove(remove => [...remove, exerciseObject])
    }
    })
      }
      useEffect(()=>{
        const deleteRequest=async()=>{
        try{
        const res=await DeleteExercises(remove)
        setInformation([res])

        }
      catch(error){
        // console.log("hello")
          console.log(error)
        }
      }
      if(remove.length>0){
      deleteRequest()
      setRemove([])

      }
    },[remove])
    
  useEffect(()=>{
      const retrieve=async()=>{
        await GetExercises().then(data => {
          if(data[0].exercises.length>0){
        for (const obj of data[0].exercises){
          obj.delete=false
          obj.check=false
        }
        setInformation(data)
        
        }
      }).catch(error => {
        console.error('Error in GetExercises:', error);
        });
        }

        

        if(information.length===0){
        retrieve();
        }
    
      
    }
  ,[information])


      // const exerciseData=GetExercises()
      // console.log(exerciseData)
      return(
        <div className="UserDisplay">
          {information.length>0&&information[0].exercises.map((item,index) => (
            <form key={index} id='information'>
              {item.name}
              <br />
              {item.description}
              <br />
              <label>
                <input
                  type="checkbox"
                  id={item.id}
                  onChange={() => RemoveExercise(item)}
                  checked={check.includes(item.name)}
                />
                Delete Exercise
              </label>
            </form>
          ))}
          {information.length>0&&<button onClick={Submit}>Submit</button>}
          {information.length===0&& <h1>You have no exercises, click Search to start</h1>}
          
        </div>
)    
      
            }

export default UserDisplay