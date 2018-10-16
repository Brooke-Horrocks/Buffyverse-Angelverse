import React from 'react'
import { Switch, Route } from "react-router-dom";

import Home from './Home';
import Seasons from './Seasons';
import Cast from './Cast';

function MainViewContainer() {
    return (
        <div className="main-view-container">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/seasons" component={Seasons} />
                <Route path="/cast" component={Cast} />
            </Switch>
        </div>
    )
}

export default MainViewContainer;