import React from "react";
import {db as firestore, auth} from "../firebase/firebase";
import { doc, deleteDoc } from "firebase/firestore";
import { collection, query as fsQuery, where, addDoc,} from "firebase/firestore";

function Board(props){

    const handleDeleteBoard = async (id) => {
            
        await deleteDoc(doc(firestore, "Boards", id));
        console.log(id)
    }

    return(
        <div onClick={() => handleDeleteBoard(props.name)} className="BoardCard" style={{background: props.color, width: "150px", height: "200px" }}>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <button>Delete</button>
        </div>
    )
}

export default Board;