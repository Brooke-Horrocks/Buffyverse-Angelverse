import React from 'react'

import { withCastMemberContext } from './CastMemberData';

function CastMemberDetail({ person, character }) {
    return (
        <div className="cast-member-detail-container">
            <h3>{person.name} <i>as {character.name}</i></h3>
            <p><span className="cast-member-attribute-label">Gender: </span>{person.gender}</p>
            <p><span className="cast-member-attribute-label">Birthday: </span>{person.birthday}</p>
            <p><span className="cast-member-attribute-label">Born in: </span>{person.country.name}</p>
            <div className="cast-member-img-container">
                <img src={person.image.medium} alt="" className="cast-member-image"/>
                <img src={character.image.medium} alt="" className="cast-member-image"/>
            </div>
        </div>
    )
}

export default withCastMemberContext(CastMemberDetail);