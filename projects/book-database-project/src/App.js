import React from "react";

import HeaderContainer from "./Header/HeaderContainer";
import MainContainer from './Main/MainContainer';
import FooterContainer from "./Footer/FooterContainer";

function App(){
    return(
        <div>
            <HeaderContainer />
            <MainContainer />
            <FooterContainer />
        </div>
    )
}

export default App;