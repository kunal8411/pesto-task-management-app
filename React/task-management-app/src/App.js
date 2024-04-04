import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/log-in.jsx";
import HomePage from "./components/HomePage/HomePage.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";
// import ProtectedRoute from './ProtectedRoute';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/login" element={<Login />} />

        <Route path="/" element={<HomePage />} />

        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
