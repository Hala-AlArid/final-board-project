import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddBoard from "./AddBoard";
import NavBar from "./NavBar";
import Footer from "./Footer"

export default function Home(props) {
  

  return (
    <div>
      <NavBar/>
      <AddBoard/>
      <Footer/>
    </div>
  );
}

