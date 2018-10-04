import React from 'react'

function ServiceDetail({id, name, price, description}) {
    return (
        <div>
            <h2>Product Name: {name}</h2>
            <p>ID: {id}</p>
            <p>Price: ${price}</p>
            <p>Description: {description}</p>
        </div>
    )
}

export default ServiceDetail;