import React, { useState} from "react";
import '../styles/BoardList.css'
import Board from "./Board"
import database from "../firebase" 
import { collection, getDocs } from "firebase/firestore";
const boardCollection = collection(database, "Boards")

function BoardList(){
    window.addEventListener('load', () => { getBoardsFromDB(); });
    const [boardList , setBoardList] = useState([]);
    async function getBoardsFromDB (){
        const querySnapshot = await getDocs(boardCollection);
        querySnapshot.forEach((doc) => { 
            console.log(doc.data())
            setBoardList((prev)=>[...prev,doc.data()]) 
        });
    } 
    const boardsToDisplay = boardList.map((board)=>{
        return <Board className="Board" key={board.name} name={board.name} color={board.color}/>
    })
    
    return(
        <>
        <h1>My boards</h1>
        <div className="BoardList">
            {boardsToDisplay}
        </div>
        </>
    );
}

export default BoardList;