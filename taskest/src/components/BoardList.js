import React, { useState} from "react";
import '../styles/BoardList.css'
import Board from "./Board"
import database from "../firebase"
import { NavLink } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
const boardCollection = collection(database, "Boards")

function BoardList(){
    window.addEventListener('load', () => { getBoardsFromDB(); });
    const [boardList , setBoardList] = useState([]);
    async function getBoardsFromDB (){
        const querySnapshot = await getDocs(boardCollection);
        querySnapshot.forEach((doc) => { 
            setBoardList((prev)=>[...prev,doc.data()]) 
        });
    };
    
    function handleGoToBoard(event){
        console.log(event.target.id)
    }

    const boardsToDisplay = boardList.map((board)=>{
        return <NavLink to="board"><Board key={board.name} id={board.id} name={board.name} color={board.color} goToBoard = {handleGoToBoard} /></NavLink> 
    });
    
    return(
        <div className="MyBoards" id="boardList">
            <h1>My boards</h1>
        <div className="BoardList">
            {boardsToDisplay}
        </div>
        </div>
    );
}

export default BoardList;