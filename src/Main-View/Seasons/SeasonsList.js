import React from 'react';

import { withSeasonContext } from './SeasonData';
import { withHeaderContext } from '../../Header/HeaderData'

import SeasonView from './SeasonView';
import Loading from '../../Loading';
import ErrorHandling from '../../ErrorHandling';

function SeasonsList({ show, seasonLoading, seasonErr, seasons }) {
    const filterShow = (show) => {
        return seasons => seasons.filter(season => season.showName === show)
    }
    const filteredSeasons = filterShow(show)(seasons);
    const seasonElements = filteredSeasons.map(season => (
        <SeasonView key={season.id} season={season}/>
    ))

    return (
        <Loading loading={seasonLoading}>
            <ErrorHandling err={seasonErr}>
                {seasonElements}
            </ErrorHandling>
        </Loading>
        
    )
}

export default withHeaderContext(withSeasonContext(SeasonsList));