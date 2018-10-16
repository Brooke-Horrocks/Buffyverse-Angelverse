import React from 'react'

function TitleContent({show, buffy, angel}) {
    return (
        <h1 className="title">
            {show === "buffy" ? 
                buffy.name
                :
                angel.name
            }
        </h1>
    )
}

export default TitleContent;