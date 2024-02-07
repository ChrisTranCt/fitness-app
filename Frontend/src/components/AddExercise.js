// Adds and displays text to the screen
import PropTypes from 'prop-types'

import { useState } from "react"

// return: a form with exercise and an option to choose
 const AddExercise=({exercise,check,setCheck})=>{
    
        function onChange(id){
        exercise[id-1].add=(!exercise[id-1].add)
        if(exercise[id-1].add===true){
          setCheck([...check, exercise[id-1]]);
        }
        else{
          const test=check.filter(value=>value.id!==id)
          console.log(test)
        }
    }
        
        
    return (
        <div>
          {exercise.map((item) => (
            <form key={item.id} className='forms'>
              {item.name}
              <br />
              {item.instructions}
              <br />
              <label>
                <input
                  type="checkbox"
                  id={item.id}
                  onChange={() => onChange(item.id)}
                  // checked={item.add}
                />
                Add Exercise
              </label>
            </form>
          ))}
        </div>
      );
        }

AddExercise.propTypes={
exercise:PropTypes.array,
onToggle:PropTypes.func,
}
export default AddExercise