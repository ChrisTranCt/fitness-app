import {useState} from 'react'
import React from 'react'
import Button from './Button'
export const SearchExercise=({})=>{
  const APIkey='9pnONi9rmgzDTWHOhupSbg==xq24Cu6Ap1CzolHj'
  const[text,setText]=useState('')
  
    const onSubmit=(e)=>{
        e.preventDefault(); 
        if(text===''){
          alert('Please add a muscle group')
          return
        }
        let options = {
          method: 'GET',
          headers: { 'x-api-key': APIkey }
        }
        let url = 'https://api.api-ninjas.com/v1/exercises?muscle='+text
        fetch(url,options)
              .then(res => res.json()) // parse response as JSON
              .then(data => {
                console.log(data)
              })
              .catch(err => {
                  console.log(`error ${err}`)
              }); 
      }
    return(
        <form>
        <p>Search an exercise by muscle group:</p>
        <input type='text' value={text}  onSubmit={onSubmit} 
        onChange={(e)=>setText(e.target.value)}>
        </input>
        <Button onClick={onSubmit} />
        </form>
    );
}

export default SearchExercise