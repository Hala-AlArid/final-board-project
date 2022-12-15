import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {db as firestore, auth} from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, query as fsQuery, where, addDoc,} from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import Board from "./Board";
import { doc, deleteDoc } from "firebase/firestore";

function BoardList({user}){
        const query = fsQuery(
          collection(firestore, "Boards"),
          where("created_by", "==", user.uid)
        );
      
        const navigate = useNavigate();
      
      
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
          <div>
            {boards.docs.map((doc) => (
              <Board key={doc.data().id} name = {doc.data().name} color={doc.data().color}
              description={doc.data().description} />
            ))}
          </div>
        );
      
}

export default BoardList;