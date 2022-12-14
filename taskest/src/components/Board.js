import React, {useState} from "react";
import database from "../firebase";
import { collection, deleteDoc , doc , onSnapshot } from "firebase/firestore";
import Card from 'react-bootstrap/Card';
function Board({name , color, description }){ 
    const variant = color;
    return(        
    <Card className="BoardCard">
        <Card.Header style={{background: color}}>{name}</Card.Header>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
          Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      )
    return(
        <div className="BoardCard" style={{background: color}}>
            <h2>{name}</h2>
            <button onClick={async (e)=>{
                e.preventDefault();
                await deleteDoc(doc(database, "Boards",  name )); 
            }}>Delete</button>
        </div>
    );
}

export default Board;