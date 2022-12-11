import './App.css';
import './index.css';
import React, {useState} from "react";
import { collection, addDoc } from "firebase/firestore";
import db from "./firebase";
import { async } from '@firebase/util';
import Header from "./components/header"
import Nav from "./components/nav"
import BoardList from "./components/BoardList"
import Footer from "./components/footer"
function App() {

  return (
    <div className="App">
      <Header/>
      <Nav/>
      <BoardList/>
      <Footer/>
    </div>
  );
}

export default App;