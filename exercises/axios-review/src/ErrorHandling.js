import React from 'react'

function ErrorHandling({ err, children }) {
    return (
        err ? 
            <div>Data Unavailable</div>
            :
            children
    )
}

export default ErrorHandling;