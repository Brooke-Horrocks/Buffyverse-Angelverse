import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from "react-router-dom"

import App from './App';
import HeaderData from './Header/HeaderData';
import ShowData from './Header/ShowData';
import SeasonData from './Main-View/SeasonData';

render(
    <HeaderData>
        <ShowData>
            <SeasonData>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </SeasonData>
        </ShowData>
    </HeaderData>, 
document.getElementById('root'));