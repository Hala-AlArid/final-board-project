 import './App.css';
import './index.css';
import React from "react";
import Footer from './components/Footer';
import Home from "./components/Home"; 
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
            <div>
              <NavBar/>
                <Home/>
                <Footer/>
             </div>
    </div>
  );
}

export default App;