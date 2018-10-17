import React from 'react'

import { Route } from "react-router-dom";

import { withEpisodeContext } from './Episodes/EpisodeData';

import Title from "../Title"
import SeasonsList from "./SeasonsList";
import EpisodeDetail from './Episodes/EpisodeDetail';
import Loading from '../Loading';
import ErrorHandling from '../ErrorHandling';

function Seasons({ episodes, episodeLoading, episodeErr }) {
    return (
        <Loading loading={episodeLoading}>
            <ErrorHandling err={episodeErr}>
                <div>
                    <Title />
                    <SeasonsList />
                    <Route path="/seasons/episode/:id"
                        render={({ match: { params: { id } } }) => (
                            <EpisodeDetail {...episodes.find(ep => ep.id === +id)}/>
                        )} />
                </div>
            </ErrorHandling>
        </Loading>
    )
}

export default withEpisodeContext(Seasons);