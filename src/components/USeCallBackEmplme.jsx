import React, {useState, useCallback} from 'react';

function USeCallBackEmplme() {
    const [task, setTask] = useState([]);

    const addTask= useCallback( ()=>{
        setTask((prevState)=>[...prevState, 'some New Task']);
    }, [setTask])
    
  return <div> 
      <Button addTask={addTask} /> 
      {task.map((task, index)=>
          (<h2 key={index}>{task}</h2>)
      )}

       
      </div>;
}


const Button =React.memo(({addTask})=>{
    console.log('Button Rendered');
    return <div>
        <button className='btn btn-primary' onClick={addTask}>Click me</button>
    </div>
})

export default USeCallBackEmplme;
