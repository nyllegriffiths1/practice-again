import React, { useState } from 'react';
import './App.css';

function App() {
  // setting up usestate to store tasks on local
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  }

  const handleAddTask = (e) => {
    e.preventDefault();
    if(newTask.trim()) {
      console.log([...tasks, newTask]);
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  return (
    <div className="App">
      <div className='container'>

        <h1>ToDo List</h1>

        <form className='form-form' onSubmit={handleAddTask}>

          <input 
            className='entry' 
            placeholder='Type in a reminder' 
            required 
            name='add'
            value={newTask}
            onChange={handleInputChange}
          />
          <button type='submit'>Add</button>

        </form>

        <div className='tasks'>
          <ul className='tasks-ul'>
            {tasks.map((task, index) => {
              return (
                <li key={index}>
                  {task}
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
