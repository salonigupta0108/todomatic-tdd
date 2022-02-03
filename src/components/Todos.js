import React from 'react';
import Todo from './/Todo'

const Todos = ({tasks,onDelete,length}) => {
  return <div className='task'>
      
      {tasks?.map((task) => (
          <Todo key={task.id} task={task} onDelete={onDelete} length={length}/>
          ))
      }
  </div>;
};

export default Todos;
