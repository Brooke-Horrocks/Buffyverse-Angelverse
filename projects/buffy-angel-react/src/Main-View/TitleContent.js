import React from 'react';
import { withHeaderContext } from '../Header/HeaderData';

function TitleContent({show, buffy, angel}) {
    const whichFont = () => {
        const fontStyleAngel = {
            fontFamily: 'Angelized',
            textTransform: 'uppercase'
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
        <h1 style={whichFont()} className="title">
            {show === "buffy" ? 
                buffy.name
                :
                angel.name
            }
        </h1>
    )
}

export default withHeaderContext(TitleContent);