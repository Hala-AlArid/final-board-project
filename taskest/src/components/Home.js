import React, {useState} from "react";
import database from "../firebase"
import { addDoc , collection} from 'firebase/firestore';
import Header from "./Header"
import NewBoardForm from "./NewBoardForm"
import BoardList from "./BoardList"
import Footer from "./Footer"

function Home() {
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
    <div className="home">
    {/* <button onClick={handleAdd}>Click me to add to firebase!</button> */}
      <NewBoardForm />
      <BoardList/>
      <Footer/>
    </div>
  );
}

export default Home;