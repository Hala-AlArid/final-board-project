import React, {useState} from "react";
import NewBoardForm from "./NewBoardForm"
import BoardList from "./BoardList"

function Home() {
  return (
    <div className="Home">
      <BoardList/>
    </div>
  );
}
export default Home;