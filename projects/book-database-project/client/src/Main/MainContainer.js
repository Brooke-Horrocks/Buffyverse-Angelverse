import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home/Home";
import MyBooks from "./MyBooks/MyBooks";
import Wishlist from "./Wishlist/Wishlist";
import Recommendations from "./Recommendations/Recommendations";
import Add from "./Add/Add";

function MainContainer() {
    return (
        <div className="main-container">
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/owned" component={MyBooks}/>
                <Route path="/wishlist" component={Wishlist}/>
                <Route path="/recommendations" component={Recommendations}/>
                <Route path="/add-a-book" component={Add}/>
            </Switch>
        </div>
    )
}

export default MainContainer;