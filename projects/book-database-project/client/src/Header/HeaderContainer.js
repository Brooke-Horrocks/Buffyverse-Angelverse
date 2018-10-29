import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid"

import Header from "./Header";
import Navbar from "./Navbar";

function HeaderContainer() {
    return (
        <AppBar>
            <Grid container direction="column" justify="space-around" alignItems="center">
                <Header />
                <Navbar />
            </Grid>
        </AppBar>
    )
}

export default HeaderContainer;