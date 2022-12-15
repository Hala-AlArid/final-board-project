import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {db as firestore, auth} from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, query as fsQuery, where, addDoc,} from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";

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

    const board = {
      name,
      color,
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

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Board Name" name="name" />
      <input type="text" placeholder="Board color" name="color" />
      <button type="submit">Add Board</button>
    </form>
  );
};

const BoardList = ({ user }) => {
  const query = fsQuery(
    collection(firestore, "Boards"),
    where("created_by", "==", user.uid)
  );

  const navigate = useNavigate();

  function GoToBoard(event){
    const id = event.target.id;
    navigate(`/board`);
  }

  const [boards, loading, error] = useCollection(query);

  if (loading) {
    return <p>Loading Boards...</p>;
  }

  if (error) {
    return <p>An error occured: {error?.message}</p>;
  }

  if (!boards.size) {
    return <p>No boards found. Start by adding a board</p>;
  }

  return (
    <ul>
      {boards.docs.map((doc) => (
        <li
          key={doc.id}
          id={doc.id}
          onClick = {GoToBoard}
          style={{
            margin: 5,
            padding: 10,
            cursor: "pointer",
          }}
        >
          <span id={doc.id}>
            Board Name: {doc.data().name}. color: {doc.data().color}
          </span>
        </li>
      ))}
    </ul>
  );
};
