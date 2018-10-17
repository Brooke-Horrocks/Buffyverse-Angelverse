import React from 'react';
import { withRouter } from 'react-router-dom';

import { withHeaderContext } from './HeaderData';

function RightMenu({ show, currentPage, toggleShow, history }) {
    const whichFont = () => {
        const fontStyleAngel = {
            fontFamily: 'Angelized'
        }
        const fontStyleBuffy = {
            fontFamily: 'REBUFFED'
        }

        if(show === 'buffy'){
            return fontStyleAngel
        } else {
            return fontStyleBuffy
        }
    }

    const handleOnClick = () => {
        toggleShow();
        if(currentPage === "home") history.push("/")
        if(currentPage === "seasons") history.push("/seasons")
        if(currentPage === "cast") history.push("/cast")
    }

    return (
        <div style={whichFont()} className="left-menu-container">
            <button className="toggle-button" onClick={handleOnClick}> 
                {show === "buffy" ?
                    "ANGEL"
                    :
                    "Buffy"
                }
            </button>
        </div>
    )
}

export default withRouter(withHeaderContext(RightMenu));