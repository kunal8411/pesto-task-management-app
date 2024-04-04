import React, { useState, useEffect } from "react";
import TaskForm from "../TaskForm/TaskForm.jsx";
import TaskList from "../TaskList/TaskList.jsx";
import axios from "axios";
import BASE_URL from "../../local.js";
import { useNavigate } from "react-router-dom";

import "./index.css";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate("/login");
    }
  }, []);
  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
    axios
      .get(`${BASE_URL}api/tasks`)
      .then((res) => setTasks(res.data))
      .catch((err) => console.log(err));
  }, []);

  const addTask = (task) => {
    axios
      .post(`${BASE_URL}api/tasks`, task)
      .then((res) => setTasks([...tasks, res.data]))
      .catch((err) => console.log(err));
  };

  const updateTask = (id, updatedTask) => {
    axios
      .put(`${BASE_URL}api/tasks/${id}`, updatedTask)
      .then((res) => {
        setTasks(tasks.map((task) => (task._id === id ? res.data : task)));
      })
      .catch((err) => console.log(err));
  };

  const deleteTask = (id) => {
    axios
      .delete(`${BASE_URL}api/tasks/${id}`)
      .then(() => setTasks(tasks.filter((task) => task._id !== id)))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="app-class">
        <div className="p-5 text-xl font-bold bg-gray-200">
          Task Management Application
        </div>
        <TaskForm addTask={addTask} />
        <TaskList
          tasks={tasks}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      </div>
    </>
  );
};

export default HomePage;
