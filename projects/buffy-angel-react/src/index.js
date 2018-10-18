import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from "react-router-dom"

import App from './App';
import HeaderData from './Header/HeaderData';
import ShowData from './Header/ShowData';
import SeasonData from './Main-View/Seasons/SeasonData';
import EpisodeData from './Main-View/Seasons/Episodes/EpisodeData';
import CastMemberData from './Main-View/Cast/CastMemberData';

render(
    <HeaderData>
        <ShowData>
            <SeasonData>
                <EpisodeData>
                    <CastMemberData>
                        <BrowserRouter>
                            <App />
                        </BrowserRouter>
                    </CastMemberData>
                </EpisodeData>
            </SeasonData>
        </ShowData>
    </HeaderData>, 
document.getElementById('root'));