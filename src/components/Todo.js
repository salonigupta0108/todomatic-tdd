import React from 'react';

const Todo = (props) => {
  return (<div className='task'>
    
    <h3>{props.task.todo}
    
    <button className='del-button' data-testid="delete-button" onClick={()=>props.onDelete(props.task.id)}>
        Delete
    </button>
    </h3>
    <p>{props.task.date} at {props.task.time}</p>
     
      
  </div>);
};

export default Todo;
