import './App.css';
import './index.css';
import React from "react";
import { Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
            <div>
            <NavBar />
               
                 <Route exact path="/about">
                   <About />
                </Route>
                 <Route exact path="/">
                   <Home />
                </Route>
               
             </div>
        
    </div>
  );
}

export default App;