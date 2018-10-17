import React from 'react'

import { withHeaderContext } from '../Header/HeaderData';
import { withCastMemberContext } from './CastMemberData';

import Loading from '../Loading';
import ErrorHandling from '../ErrorHandling';
import CastMemberView from './CastMemberView';

function CastList({ show, castLoading, castErr, cast }) {
    const filterShow = (show) => {
        return cast => cast.filter(castMember => castMember.showName === show);
    }

    const filteredCast = filterShow(show)(cast);
    const castElements = filteredCast.map((castMember, i) => (
        <CastMemberView key={i} castMember={castMember}/>
    ))

    return (
        <Loading loading={castLoading}>
            <ErrorHandling err={castErr}>
                <div className="cast-list-container">{castElements}</div>
            </ErrorHandling>
        </Loading>
    )
}

export default withHeaderContext(withCastMemberContext(CastList));