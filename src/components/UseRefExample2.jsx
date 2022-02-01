import React from 'react';
import {useRef, useState, useEffect} from 'react'

function UseRefExample2() {

    const [name, setName] = useState('');
    const inputRefer = useRef(1);
    const prevsName= useRef('')

   useEffect(() => {
     inputRefer.current = inputRefer.current +1;
     prevsName.current = name;
   }, [name]);
   
    
  return <div className='container mb-2'>
      <h1>input referer: {inputRefer.current}</h1>
      <h1>Previous state: {prevsName.current}</h1>
      <form >
          <label htmlFor="name">Name</label>
          <input className='form-control mb-2' type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
      </form>
  </div>;
}

export default UseRefExample2;
