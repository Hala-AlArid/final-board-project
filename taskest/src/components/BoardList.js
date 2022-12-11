import React, {useState} from "react";
import Board from "./Board"

function BoardList(){
    return(
        <div className="MyBoards">
            <h1>My boards</h1>
        <div className="BoardList">
        <Board/>
        </div>
        </div>
    );
}

export default BoardList;