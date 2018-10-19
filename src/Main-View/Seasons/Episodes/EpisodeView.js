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
                <div className="episode-buttons-container">
                    <button className="episode-buttons" onClick={handleRouting(history, `/seasons/episode/${episode.id}`)(toggle)}>
                        <div>Episode {episode.number} - {episode.name}</div>
                    </button>
                </div>
            )}
        </Consumer>
    )
}

export default withRouter(EpisodeView);