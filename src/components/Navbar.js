import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
    return ( <
        div className = "navbar" >
        <
        div className = "toggleButton" >

        <
        /div> <
        div className = "links" >
        <
        button > < Link to = "/" > Home < /Link></button >
        <
        button > < Link to = "/Projects" > Projects < /Link></button >
        <
        button > < Link to = "/Experiences" > Experiences < /Link></button >
        <
        /div>

        <
        /div>
    )
}

export default Navbar