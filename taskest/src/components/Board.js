import React, {useState} from "react";
import database from "../firebase";


function Board({name , color}){
    
    return(
        <div className="BoardCard" style={{background: color}}>
            <h2>{name}</h2>
        </div>
    );
}

export default Board;