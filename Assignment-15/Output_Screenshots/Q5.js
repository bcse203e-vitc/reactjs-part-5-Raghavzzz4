import React, { useState } from 'react';

function TaskTracker() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
    setNewTask('');
  };

  const handleCompleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index] = `${newTasks[index]} (Completed)`;
    setTasks(newTasks);
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div>
      <h1>Task Tracker</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="New Task"
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <p>{task}</p>
            <button onClick={() => handleCompleteTask(index)}>Complete</button>
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskTracker;
