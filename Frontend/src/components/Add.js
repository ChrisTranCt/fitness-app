import Button from "./Button"
import React, { useState } from 'react';

const Add=({})=>{
    const more=()=>{
        document.querySelector("#addButton").addEventListener('click',com)
    }
    const com=()=>{
        console.log("hello")
    }
    return (
        <Button onClick={more} />

    );
}
export default Add