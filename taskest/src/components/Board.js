import React from "react";

function Board(props){
    return(
        <div className="BoardCard" style={{background: props.color, width: "150px", height: "200px" }}>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <button>Delete</button>
        </div>
    )
}

export default Board;