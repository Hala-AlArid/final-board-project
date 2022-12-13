import React, {useState} from "react";
import database from "../firebase"
import { async } from '@firebase/util';
import { addDoc , doc , collection, setDoc} from 'firebase/firestore';
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
        return <li><button name={"color"} value={color} onClick={handlePropertyChange} style={{background: color}}></button></li>
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
        <div className="Nav">
            <form className="NavForm">
                <h2>Add a New Board</h2>
                <input name="name" placeholder="Board Name" onChange={handlePropertyChange}/>
                <h3>Pick A color for your Board</h3>
                <ul>
                    {colorsItems}
                </ul>
                <button onClick={handleAddBoard}>Add</button>
            </form>
        </div>
    );
}

export default NewBoardForm;