import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {db as firestore, auth} from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, query as fsQuery, where, addDoc,} from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import Board from "./Board";
import { doc, deleteDoc } from "firebase/firestore";
import BoardList from "./BoardList";

export default function AddBoard(props) {
  
  const [user, loading, error] = useAuthState(auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user && !loading) {
      navigate("/login", { replace: true });
    }
  });

  if (loading) {
    return <p>Please wait</p>;
  }

  if (error) {
    return <p>An error occured while signing in: {error.message}</p>;
  }

  return (
    <main>
      {user && <AddForm user={user} />}
      {user && <BoardList user={user} />}
    </main>
  );
}

const AddForm = ({ user }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    e.currentTarget.reset();
    const name = data.get("name");
    const color = data.get("color");
    const description = data.get("description");

    const board = {
      name,
      color,
      description,
      created_by: user.uid,
      created_at: new Date(),
    };

    // Add a new board:

    const BoardsRef = collection(firestore, "Boards");

    addDoc(BoardsRef, board)
      .then((snapshot) => {
        console.log("Created new entry. Id:", snapshot.id);
      })
      .catch((err) => {
        alert("Error adding board.");
        console.error(err);
      });
  };

  const listOfColors = ["rgb(199, 89, 89)", "rgb(155, 155, 202)", "rgb(100, 146, 100)", "rgb(182, 93, 108)", "rgb(206, 206, 79)"]
 
    const Items = listOfColors.map((color)=>{
        return <option id={'clr'} name={color} value={color} style={{background: color}}></option>
    }) 

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Board Name" name="name" />
      <select name="color">{Items}</select>
      <input type="text" placeholder="Board Description" name="description" />
      <button type="submit">Add Board</button>
    </form>
  );
};
