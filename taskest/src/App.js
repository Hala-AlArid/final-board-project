import './App.css';
import './index.css';
import React, {useEffect} from "react";
import Header from "./components/header"
import NewBoardForm from "./components/NewBoardForm"
import BoardList from "./components/BoardList"
import Footer from "./components/footer"

function App() {
  return (
    <div className="App">
      <button>test</button>
      <Header/>
      <NewBoardForm />
      <BoardList/>
      <Footer/>
    </div>
  );
}

export default App;