import './App.css';
import './index.css';
import React, {useState} from "react";
import Header from "./components/header"
import NewBoardForm from "./components/NewBoardForm"
import BoardList from "./components/BoardList"
import Footer from "./components/footer"
import database from "./firebase"
import { addDoc , collection} from 'firebase/firestore';
function App() {
  const tmp = collection(database, "test")
  async function handleAdd(){
    let data = {
      msg: "Hello there!",
      user:"Aya"
    }
    try{
      addDoc(tmp, data)
    }
    catch{
      console.log("Error!")
    }
  }

  return (
    <div className="App">
      <button onClick={handleAdd}>Click me to add to firebase!</button>
      <Header/>
      <NewBoardForm />
      <BoardList/>
      <Footer/>
    </div>
  );
}

export default App;