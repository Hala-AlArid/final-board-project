 import './App.css';
import './index.css';
import React from "react";
 import { Route, Routes } from "react-router-dom";
 import Home from "./components/Home";
import About from "./components/About";
import TaskList from "./components/TaskList";
import Team from "./components/Team";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="team" element={<Team />} />
      <Route path="tasklist" element={<TaskList />} />
    </Routes>
  );
}

export default App;