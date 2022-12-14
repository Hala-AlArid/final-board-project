import React, {useState} from "react";
import database from "../firebase";


function Board({name , color, id, goToBoard}){
    
    return(
        <div className="BoardCard" id={id} onClick={goToBoard} style={{background: color}}>
            <h2>{name}</h2>
        </div>
    );
}

export default Board;