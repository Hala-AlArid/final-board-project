import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../images/taskestLogo.png"

function NavBar() {
    return (
      <div className="Header">
      <div className="logo">
      <img src={Logo}/>
      <h1>TASKEST</h1>
  </div>

      <div className="menu">
        <ul>
          <li>
          <NavLink
          to="/"
          exact>
          Home
        </NavLink>
        </li>

        <li>
        <NavLink
          to="/about"
          exact
        >
          About
        </NavLink>
        </li>
        </ul>
      </div>
      </div>
    );
  }
  
  export default NavBar;