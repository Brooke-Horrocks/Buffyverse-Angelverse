import React from 'react'

import Characters from './Characters';
import Starships from './Starships';
import Character from './Character';

function App(){
    return(
        <div>
            <h1>Characters</h1>
            <Characters render={Character} />
            <h1>Starships</h1>
            <Starships />
        </div>
    )
}

export default App;