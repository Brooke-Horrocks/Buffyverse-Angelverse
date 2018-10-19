import React from 'react'
import { Link } from "react-router-dom";

import { withHeaderContext } from './HeaderData';

function NavBar({ show, togglePage }) {
    const whichFont = () => {
        const fontStyleAngel = {
            fontFamily: 'Angelized'
        }
        const fontStyleBuffy = {
            fontFamily: 'REBUFFED'
        }

        if(show === 'buffy'){
            return fontStyleBuffy
        } else {
            return fontStyleAngel
        }
    }
    
    return (
        <nav className="nav-bar">
            <Link onClick={() => togglePage("home")} style={whichFont()} to={"/"}>Home</Link>
            <Link onClick={() => togglePage("seasons")} style={whichFont()} to={"/seasons"}>Seasons</Link>
            <Link onClick={() => togglePage("cast")} style={whichFont()} to={"/cast"}>Cast</Link>
        </nav>
    )
}

export default withHeaderContext(NavBar);