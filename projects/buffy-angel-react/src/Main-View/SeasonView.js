import React from 'react';

function SeasonView({ season }) {
    return (
        <div>
            <label>Season { season.number }</label>
            <select></select>
        </div>
        
    )
}

export default SeasonView;