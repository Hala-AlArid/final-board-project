import React, {useState} from "react";
import Logo from "../images/taskestLogo.png"

function Header(){
    return(
        <div className="Header">
            <div className="logo">
                <img src={Logo}/>
                <h1>TASKEST</h1>
            </div>
        </div>
    );
}

export default Header;