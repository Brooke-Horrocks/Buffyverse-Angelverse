import React from 'react';
import { withHeaderContext } from './HeaderData'; //Context not working

function LeftMenu({ show, toggleShow }) {
    return (
        <div className="left-menu-container">
            <button onClick={toggleShow}> 
                {show === "buffy" ?
                    "Angel"
                    :
                    "Buffy"
                }
            </button>
        </div>
    )
}

export default withHeaderContext(LeftMenu);