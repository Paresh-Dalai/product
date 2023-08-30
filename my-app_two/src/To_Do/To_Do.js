import React, { useState } from 'react';
import "./To_Do.css"

  function To_Do () {
  

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

  const addTask = ()=> {
    if (newTask !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const totalTasks = tasks.length;
  const completedTasks = tasks.reduce((count, task) => (task.completed ? count + 1 : count), 0);

    return (
      <div className="app">
        <h1>To-Do List</h1>
        <div className='first_section'>
          <input
            type="text"
            placeholder="Add a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={addTask}>Add Task</button>
        </div>
        <div className='second_container'>
          <p>Total Tasks : {totalTasks}</p>
          <p>Completed Tasks : {completedTasks}</p>
        </div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(index)}
              />
              <span className={task.completed ? 'completed' : ''}>{task.text}</span>
              <img src='https://i.pinimg.com/originals/ff/fa/9b/fffa9b880767231e0d965f4fc8651dc2.gif' alt='Delete_Image' onClick={() => removeTask(index)} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  
  export default To_Do;