import React from 'react';
import { withRouter } from 'react-router-dom';

const handleRouting = (history, to) => e => {
    history.push(to);
}

function CastMemberView({ castMember, history }) {
    return (
        <div onClick={handleRouting(history, `/cast/cast-member/${castMember.person.name}`)} className="cast-member">
            <div className="cast-member-person">{castMember.person.name}</div>
            <i className="cast-member-character">{castMember.character.name}</i>
        </div>
    )
}

export default withRouter(CastMemberView);