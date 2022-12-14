import React, {useState} from "react";
import database from "../firebase" 
import {  doc , collection, setDoc} from 'firebase/firestore';

function NewTaskForm({boardID}){
    const [newTaskData , setNewTaskData] = useState({
        name:"task",
        board_id:"",
        progress: false,
        description: ""
    });

    function handlePropertyChange(event){
        event.preventDefault();
        const property = event.target.name;
        const value = event.target.value;
        const newData = {
            ...newTaskData,
            [property]: value
        }
        setNewTaskData(newData)
    };

    const TasksCollection = collection(database, "Tasks");

    async function handleAddTask(event){
        event.preventDefault();
        if(newTaskData.name === "task" || newTaskData.name.length === 0) alert("Invalid Task name")
        else{
            try{
                await setDoc(doc(TasksCollection, newTaskData.name), newTaskData)
                alert("New Task was successfully added.");
              }
              catch{
                alert("Error")
              }
        }
    }

    return(
        <div>
            <div className="NewTaskForm">
            <form className="NavForm">
                <h2>Add a New Task</h2>
                <input name="name" placeholder="Task Name" onChange={handlePropertyChange}/>
                <input name="description" placeholder="Description" onChange={handlePropertyChange}/>
                <button onClick={handleAddTask}>Add</button>
            </form>
        </div>
        </div>
    );
}

export default NewTaskForm;