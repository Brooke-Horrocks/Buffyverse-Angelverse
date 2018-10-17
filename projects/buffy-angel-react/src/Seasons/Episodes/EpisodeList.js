import React from 'react';

import { withEpisodeContext } from './EpisodeData';
import { withHeaderContext } from '../../Header/HeaderData';

import Loading from '../../Loading';
import ErrorHandling from '../../ErrorHandling';
import EpisodeView from './EpisodeView';

function EpisodeList({ show, episodeLoading, episodeErr, episodes, season }) {
    const filterShow = (show) => {
        return episodes => episodes.filter(episode => episode.showName === show)
    }
    const filterSeason = (season) => {
        return episodes => episodes.filter(episode => episode.season === season)
    }

    const filteredByShow = filterShow(show)(episodes);
    const filteredBySeason = filterSeason(season.number)(filteredByShow);

    const episodeElements = filteredBySeason.map(episode => (
        <EpisodeView key={episode.id} episode={episode}/>
    ))

    return (
        <Loading loading={episodeLoading}>
            <ErrorHandling err={episodeErr}>
                <div>{episodeElements}</div>
            </ErrorHandling>
        </Loading>
    )
}

export default withHeaderContext(withEpisodeContext(EpisodeList));