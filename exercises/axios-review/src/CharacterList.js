import React from 'react';
import CharacterView from './CharacterView';

function CharacterList({ characters }) {
    const characterComponents = characters.map((character, i) =>(
        <CharacterView key={i} {...character} />
    ))
    return (
        <div>{characterComponents}</div>
    )
}

export default CharacterList
