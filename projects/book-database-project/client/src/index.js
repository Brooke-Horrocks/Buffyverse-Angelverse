import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from 'react-router-dom';

import BookData from "./Helpers/BookData";
import App from "./App";

render(
    <BrowserRouter>
        <BookData>
            <App />
        </BookData>
    </BrowserRouter>
    ,
    document.getElementById('root')
);