import React, {useState} from "react";
import Board from "./Board"
import database from "../firebase"
import { NavLink, Route, Switch} from "react-router-dom";
import { doc, getDoc , onSnapshot} from "firebase/firestore";


  function BoardList(){
    const [boardList , setBoardLsit] = useState([])

    async function getBoardsFromDB (){
    const docRef = onSnapshot(doc(database, "Boards","Board"), (doc) => {
        if(doc.data() === undefined) return;
        console.log("Current data: ", doc.data());
        setBoardLsit([...boardList, doc.data()])
    });}

    window.addEventListener('load', () => { getBoardsFromDB(); });

    const displayBoards = boardList.map((board)=>{
       return <Board key={board.name} name={board.name} color={board.color}/>
    })
    console.log(boardList)
    return(
        <div className="MyBoards">
            <h1>My boards</h1>
        <div className="BoardList">
            {displayBoards}
        </div>
        </div>
    );
}

export default BoardList;