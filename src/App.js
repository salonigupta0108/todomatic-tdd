import './App.css';
import Todos from './components/Todos'
import { useState} from 'react';

function App() {
  const [tasks,setTasks] = useState([
    {
      id: 1,
      todo: 'Doctor Appointment',
      date: '02/05/2022',
      time: '12:30 pm'
  },
  {
    id: 2,
    todo: 'Dinner Prep',
    date: '02/05/2022',
    time: '9:30 pm'
  }
  ]);
  
  const addToDo = (task) => {
    const id = Math.floor(Math.random() * 100) + 1;
    const newTodo = { id, ...task };
    setTasks([...tasks, newTodo]);
  }
  
  const [todo,setText] = useState(['']);
  const [time,setTime] = useState(['']);
  const [date,setDate] = useState(['']);

  const submitToDo = (e) => {
      e.preventDefault()
      if (!todo) {
        alert('Please add a todo before saving')
        return
      }
      addToDo({todo,date,time})
    
      setText('')
      setDate('')
      setTime('')
  }
  


  function deleteToDo (id) {
    setTasks(tasks.filter((task) => task.id !==id));
  }
  
  return (
    <div className="container">
      <h1 data-testid='title'>Todomatic</h1>
      <form className='add-form' >
        
      <div className='form-control'>
        <label>To-do</label>
        <input
          data-testid="text-input"
          type='text'
          placeholder='Add Todo'
          value={todo}
          onChange={(e) => setText(e.target.value)}
          />
      </div>
      <div className='form-control'>
        <label>Date</label>
        <input
         data-testid="date-input"
          type='text'
          placeholder='Add Date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
          />
      </div>
      <div className='form-control'>
        <label>Time</label>
        <input
          data-testid="time-input"
          type='text'
          placeholder='Add Time'
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <button type='submit' onClick={submitToDo} data-testid="add-button" value='Save Todo' className='btn btn-block' />
      <h2 data-testid='pending'>Pending tasks: {tasks.length}</h2>
      </form>

      <Todos data-testid="todo" tasks={tasks} onDelete={deleteToDo} length={tasks.length}/>
      </div>
  );
}

export default App;
