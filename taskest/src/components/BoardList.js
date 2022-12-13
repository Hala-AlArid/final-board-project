import React, {useEffect, useState} from "react";
import Board from "./Board"
import database from "../firebase"
import { NavLink, Route, Switch} from "react-router-dom";
import {  query, where, doc, getDoc , onSnapshot} from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
const boardCollection = collection(database, "Boards")

function BoardList(){
    window.addEventListener('load', () => { getBoardsFromDB(); });
    const [boardList , setBoardList] = useState([]);
    let arr = []
    async function getBoardsFromDB (){
            const querySnapshot = onSnapshot(getDocs(boardCollection));
            querySnapshot.forEach((doc) => {
                arr = [...arr , doc.data()]
                console.log("new obj fetched is  ", doc.data());
                setBoardList(arr);
            });
    }
    
    const boardsToDisplay = boardList.map((board)=>{
        return <Board key={board.name} name={board.name} color={board.color}/>
    })
    return(
        <div className="MyBoards">
            <h1>My boards</h1>
        <div className="BoardList">
            {boardsToDisplay}
        </div>
        </div>
    );
}

export default BoardList;