import React from 'react'
import { useState } from 'react';
import '../App.css';

function Funtime() {
    const currTime =new Date().toLocaleTimeString();
   const [time ,setTime] =useState(currTime);

   const update=()=>{
   const currTime =new Date().toLocaleTimeString();
   setTime(currTime);
     
   }
   setInterval(() => {
    update()
   }, 1000);

    return (
        <div className='time-container'>
       <h1>{time}</h1>
           
        </div>
    );
}
  


export default Funtime;