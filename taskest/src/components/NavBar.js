import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../images/logo.png"
import '../styles/NavBar.css';

function NavBar() {
    return (
      <div className="Header">
      <div className="logo">
      <h1>Taskest</h1>
  </div> 
  <div className="menu">
         <ul>
        <li>
          <NavLink to="/" exact><h4>Home</h4></NavLink>
        </li> 
        <li>
          <NavLink to="/about" exact><h4>About</h4></NavLink>
        </li>
        <li>
          <NavLink to="/" exact><h4>Team</h4></NavLink>
        </li>  
        </ul>
       </div>
      </div>
    );
  }
  
  export default NavBar;