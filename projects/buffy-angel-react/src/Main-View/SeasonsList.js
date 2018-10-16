import React from 'react';

import { withSeasonContext } from './SeasonData';
import { withHeaderContext } from '../Header/HeaderData';

import SeasonView from './SeasonView';
import Loading from '../Loading';
import ErrorHandling from '../ErrorHandling';

// import EpisodeView from './EpisodeView';

function SeasonsList({ show, seasonLoading, seasonErr, seasons }) { //add episodes
    const filterShow = (show) => {
        return seasons => seasons.filter(season => season.showName === show)
    }
    const filteredSeasons = filterShow(show)(seasons);
    const seasonElements = filteredSeasons.map((season, i) => (
        <SeasonView key={i} season={season}/>
    ))

    return (
        <Loading loading={seasonLoading}>
            <ErrorHandling err={seasonErr}>
                <div>{seasonElements}</div>
            </ErrorHandling>
        </Loading>
        
    )
}

export default withHeaderContext(withSeasonContext(SeasonsList));