// TaskForm.js
import React, { useState } from 'react';
import './TaskForm.css'; // Import CSS file for styling

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('To Do');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ title, description, status });
    setTitle('');
    setDescription('');
    setStatus('To Do');
  };

  return (
    <div className="task-form-container">
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <label >Title</label>
        <input type="text" placeholder="add title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <label >Description</label>

        <input type="text" placeholder="add description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <label >Status</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
