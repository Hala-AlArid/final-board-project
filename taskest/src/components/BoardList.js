import React, {useEffect, useState} from "react";
import Board from "./Board"
import database from "../firebase"
import { NavLink, Route, Switch} from "react-router-dom";
import {  query, where, doc, getDoc , onSnapshot} from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

  function BoardList(){
    const [boardList , setBoardLsit] = useState([]);
    

    // async function getBoardsFromDB (){
    // const docRef = onSnapshot(doc(database, "Boards", ""), (doc) => {
    //     if(doc.data() === undefined) return;
    //     console.log(docRef);
    //     setBoardLsit([...boardList, doc.data()])
    // });}

    // window.addEventListener('load', () => { getBoardsFromDB(); });

    // const displayBoards = boardList.map((board)=>{
    //    return <Board key={board.name} name={board.name} color={board.color}/>
    // })

    // hala's part

        async function getBoardsFromDB (){
            const querySnapshot = await getDocs(collection(database, "Boards"));
            querySnapshot.forEach((doc) => {
                setBoardLsit([...boardList, doc.data()])
                // console.log(doc.data());
                console.log(boardList)
            });
        }

        window.addEventListener('load', () => { getBoardsFromDB(); });

    
    return(
        <div className="MyBoards">
            <h1>My boards</h1>
        <div className="BoardList">
            {/* {displayBoards} */}
        </div>
        </div>
    );
}

export default BoardList;