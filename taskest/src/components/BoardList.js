import React, {useState} from "react";
import Board from "./Board"
import { NavLink, Route, Switch} from "react-router-dom";

function BoardList(){
    return(
        <div className="MyBoards">
            <h1>My boards</h1>
        <div className="BoardList">
        <NavLink exact to="/Tasks"><Board/></NavLink>
        </div>
        </div>
    );
}

export default BoardList;