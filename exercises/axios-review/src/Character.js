import React from 'react'
import Loading from './Loading';
import ErrorHandling from './ErrorHandling';
import CharacterList from './CharacterList'

function Character({ loading, err, characters }){
    return(
        <Loading loading={loading}>
            <ErrorHandling err={err}>
                <CharacterList characters={characters}/>
            </ErrorHandling>
        </Loading>
    )
}

export default Character;