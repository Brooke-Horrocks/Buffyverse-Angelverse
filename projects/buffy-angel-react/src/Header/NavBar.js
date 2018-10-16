import React from 'react'
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/seasons"}>Seasons/Episodes</Link>
            <Link to={"/cast"}>Cast</Link>
        </nav>
    )
}

export default NavBar;