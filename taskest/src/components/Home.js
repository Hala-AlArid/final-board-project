import React, {useState} from "react";
import Accordion from 'react-bootstrap/Accordion';
import BoardList from "./BoardList";
import NewBoardForm from "./NewBoardForm"
function Home() {
  return (
    <Accordion defaultActiveKey="0">
    <Accordion.Item eventKey="1">
      <Accordion.Header>Add New Board</Accordion.Header>
      <Accordion.Body>
      <div className="innerItem"><NewBoardForm></NewBoardForm></div>
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="0">
      <Accordion.Header>My Boards</Accordion.Header>
      <Accordion.Body>
      <div className="innerItem"><BoardList></BoardList></div>
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
  );
}
export default Home;