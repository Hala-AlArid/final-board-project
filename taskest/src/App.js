 import './App.css';
import './index.css';
import React from "react";
 import { Route, Routes } from "react-router-dom";
 
import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
            <div>
              <NavBar />
              <Routes>
                <Route exact path="/about"/>
                </Routes>
                <About />
                <Routes><Route exact path="/"/></Routes>
                <Home />
 
             </div>
    </div>
  );
}

export default App;