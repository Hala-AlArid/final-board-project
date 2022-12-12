import './App.css';
import './index.css';
import React, {useState,useEffect} from "react";
import Header from "./components/Header"
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";
import NewBoardForm from "./components/NewBoardForm"
import BoardList from "./components/BoardList"
import Footer from "./components/footer"

function App() {
  return (
    <div className="App">
            <div>
            <NavBar />
               <Switch>
                 <Route exact path="/about">
                   <About />
                </Route>
                 <Route exact path="/">
                   <Home />
                </Route>
               </Switch>
             </div>
        
    </div>
  );
}

export default App;