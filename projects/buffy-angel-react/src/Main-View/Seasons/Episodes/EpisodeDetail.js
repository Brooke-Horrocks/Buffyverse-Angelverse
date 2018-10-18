import React from 'react';
import HTMLParser from "react-html-parser"

import { withEpisodeContext } from './EpisodeData';

function EpisodeDetail({number, name, season, summary, image}) {
    
    return (
        <div className="episode-detail-container" id={`episode-detail-container${number}`}>
            <h3>{name}</h3>
            <h4>Season {season} - Episode {number}</h4>
            {HTMLParser(summary)}
            <img className="episode-detail-img" src={image.medium} alt=""/>
        </div>
        
    )
}

export default withEpisodeContext(EpisodeDetail);