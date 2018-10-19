import React from 'react'

import { withCastMemberContext } from './CastMemberData';

function CastMemberDetail({ person, character }) {
    return (
        <div className="cast-member-detail-container">
            <h2><span className="cast-member-person-detail">{person.name}</span> <i>as {character.name}</i></h2>
            <h4>Gender:  {person.gender}</h4>
            <h4>Birthday:  {person.birthday}</h4>
            {person.deathday !== null ?
                <h4>Deathday: {person.deathday}</h4>
                :
                <div></div>
            }
            <h4>Born in:  {person.country.name}</h4>
            <div className="cast-member-img-container">
                <img src={person.image.medium} alt="" className="cast-member-image"/>
                <img src={character.image.medium} alt="" className="cast-member-image"/>
            </div>
        </div>
    )
}

export default withCastMemberContext(CastMemberDetail);