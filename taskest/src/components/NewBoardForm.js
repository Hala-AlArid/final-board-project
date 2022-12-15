import React, {useState} from "react";
import database from "../firebase" 
import {  doc , collection, setDoc} from 'firebase/firestore';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form';
function NewBoardForm(){
    const [newBoardData , setNewBoardData] = useState({
        name:"board",
        color:"white"
    })
    function handlePropertyChange(event){
        event.preventDefault();
        const property = event.target.name;
        const value = event.target.value;
        const newData = {
            ...newBoardData,
            [property]: value
        }
        setNewBoardData(newData)
    }
    const listOfColors = ["rgb(199, 89, 89)", "rgb(155, 155, 202)", "rgb(100, 146, 100)", "rgb(182, 93, 108)", "rgb(206, 206, 79)"]
    const colorsItems = listOfColors.map((color)=>{
        return <li><button id={'clr'} name={"color"} value={color} onClick={handlePropertyChange} style={{background: color}}></button></li>
    }) 
    const boardCollection = collection(database, "Boards") 
    async function handleAddBoard(event){
        event.preventDefault();
        if(newBoardData.name === "board" || newBoardData.name.length === 0) alert("Invalid board name")
        else{
            try{
                await setDoc(doc(boardCollection, newBoardData.name), newBoardData)
                alert("New Board was successfully added.")
              }
              catch{
                alert("Error")
              }
        }
    }

    return(
        <Form className="NewBoardForm">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label><h3>New Board Info</h3></Form.Label>
          <Form.Control name={'name'} placeholder="Board Name" onChange={handlePropertyChange}/> 
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Board Name</Form.Label>
          <Form.Control name={'description'} placeholder="Board Description" onChange={handlePropertyChange}/> 
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Board Color  </Form.Label>   
          <input name={'color'} type='color'id="colorpicker" onChange={handlePropertyChange} style={{margin:'10px', height:'22px'}}/> 
        </Form.Group>
        <Button variant="outline-primary" onClick={handleAddBoard}>
          Add Board
        </Button>
      </Form> 
    );
}

export default NewBoardForm;












 