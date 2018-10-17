import React, { createContext } from 'react';
import HTMLParser from 'react-html-parser';
import { withToggler } from "atom-lib";

import EpisodeList from './Episodes/EpisodeList';

export const { Consumer, Provider } = createContext();

function SeasonView({ season, on, toggle }) {
    return (
        <div>
            <div onClick={toggle} className="season-button">Season {season.number}</div>
            <div className={on ? "" : "hidden"}>
                <Provider value={{toggle}}>
                    <div>{HTMLParser(season.summary)}</div>
                    <EpisodeList season={season} />
                </Provider>
            </div>
        </div>
    )
}

export default withToggler({ on: false })(SeasonView);