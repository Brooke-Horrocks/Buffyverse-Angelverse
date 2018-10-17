import React from 'react';
import { withRouter } from "react-router-dom";

import { Consumer } from "../SeasonView"

const handleRouting = (history, to) => toggle => e => {
    history.push(to);
    toggle();
}

function EpisodeView({ episode, history }) {
    return (
        <Consumer>
            {({ toggle }) => (
                <button onClick={handleRouting(history, `/seasons/episode/${episode.id}`)(toggle)}>
                    <div>Episode {episode.number} - {episode.name}</div>
                </button>
            )}
        </Consumer>
    )
}

export default withRouter(EpisodeView);