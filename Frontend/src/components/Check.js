import { useEffect, useState } from "react";
import Button from "./Button";
import PropTypes from 'prop-types'
const Check=({info,setInfo})=>{
    const s="hello"
    const fire=(e)=>{
        e.preventDefault();
        // if (info.length===0){
            setInfo((prevInfo) => [...prevInfo, { s }]);

    // }
};
// if info changes then log it
useEffect(() => {
    const map1=info.map(data=>data)
    console.log(map1);
  }, [info]);
    return (
        <div>
            <Button onClick={fire} text={"Try Me"}/>
        </div>
        );
          }
          Check.propTypes={
            info:PropTypes.array.isRequired,
            setInfo:PropTypes.array.isRequired,
        }
export default Check;