import React from 'react'

function CharacterView({ name, eye_color, gender}){
    return(
        <div>
            <h3>{ name }</h3>
            <p>Eye Color: {eye_color}</p>
            <p>Gender: {gender}</p>
        </div>
    )
}

export default CharacterView;