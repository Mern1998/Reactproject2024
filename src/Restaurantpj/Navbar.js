import React, { useState } from 'react'
// import "./nav.css"

const Navbar = (props) => {
  const [name,setName] =useState();
  function handleSubmit(e){
    e.preventDefault();
    props.getData(name)
  }
  return (
    <>
    <div className='heading'>
    <form onSubmit={handleSubmit}>
    <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}></input>
    <button>submit</button>
    </form>
    </div>
    
    <h2>{props.dth}</h2>
    </>
  )
}

export default Navbar