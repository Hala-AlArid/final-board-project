import React, {useState} from "react";
import Logo from "../images/logo.png"

function Header(){
    return(
        <div className="Header">
            <div className="logo">
                <img src={Logo}/>
                <h1>Taskest</h1>
            </div>
        </div>
    );
}

export default Header;