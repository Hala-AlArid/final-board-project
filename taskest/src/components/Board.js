import React, {useState} from "react";
import database from "../firebase";
import { collection, deleteDoc , doc , onSnapshot } from "firebase/firestore";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
function Board({name , color, description }){ 
    const variant = color;
    return(        
    <Card className="BoardCard">
        <Card.Header style={{background: color}}>{name}</Card.Header>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
            <Button variant="outline-danger" onClick={async (e)=>{
                e.preventDefault();
                await deleteDoc(doc(database, "Boards",  name )); 
            }}>Delete</Button>
        </Card.Body>
      </Card>
      )
}

export default Board;