import React from 'react'

function StarshipView({ name, passengers, cargo_capacity }){
    return(
        <div>
            <h3>{name}</h3>
            <p>Passengers: {passengers}</p>
            <p>Cargo Capacity: {cargo_capacity}</p>
        </div>
    )
}

export default StarshipView;