import React, {useState} from "react";

function Nav(){

    return(
        <div className="Nav">
            <form className="NavForm">
                <h2>Add a New Board</h2>
                <input placeholder="Board Name"/>
                <h3>Pick A color for your Board</h3>
                <ul>
                    <li><button style={{background: "rgb(199, 89, 89)"}}></button></li>
                    <li><button style={{background: "rgb(155, 155, 202)"}}></button ></li>
                    <li><button style={{background: "rgb(100, 146, 100)"}}></button></li>
                    <li><button style={{background: "rgb(182, 93, 108)"}}></button></li>
                    <li><button style={{background: "rgb(206, 206, 79)"}}></button></li>
                </ul>
                <button>Add</button>
            </form>
        </div>
    );
}

export default Nav;