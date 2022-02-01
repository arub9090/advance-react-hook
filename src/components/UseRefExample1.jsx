import React from 'react';
import {useRef} from 'react';

function UseRefExample1() {

    const inputRefer= useRef();

    const refHandler= (e)=>{
        e.preventDefault();
        inputRefer.current.style.background ='grey';
        inputRefer.current.value= 'I Love you'
    }

  return <div>
      <form onSubmit={refHandler}>
          <label htmlFor="name">Name</label>
          <input type="text" id='name' className='form-control mb-2' ref={inputRefer}/>
          <button type='submit' className='btn btn-primary'>Submit</button>

      </form>
  </div>;
}

export default UseRefExample1;
