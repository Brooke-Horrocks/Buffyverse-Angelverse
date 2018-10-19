import React from 'react'
import { Route } from "react-router-dom";

import { withCastMemberContext } from "./CastMemberData"

import Title from '../Title';
import CastList from './CastList';
import CastMemberDetail from './CastMemberDetail';
import Loading from '../../Loading';
import ErrorHandling from '../../ErrorHandling';

function Cast({ cast, castLoading, castErr }) {
    return (
        <Loading loading={castLoading}>
            <ErrorHandling err={castErr}>
                <div>
                    <Title />
                    <CastList />
                    <Route path="/cast/cast-member/:name"
                        render={({ match: { params: { name } } }) => (
                        <CastMemberDetail {...cast.find(castMember => castMember.person.name === name)}/>
                    )} />
                </div>
            </ErrorHandling>
        </Loading>
    )
}

export default withCastMemberContext(Cast);