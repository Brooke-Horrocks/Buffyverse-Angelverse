import './assets/css/styles.css'

import React from 'react';

import HeaderContainer from './Header/HeaderContainer';
import MainViewContainer from './Main-View/MainViewContainer';
import { withHeaderContext } from './Header/HeaderData';

function App({ show }) {
  const whichBackground = () => {
    const backgroundStyleAngel = {
      backgroundImage: "url('./assets/img/angelBackground.png')",
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed'
    }
    const backgroundStyleBuffy = {
      backgroundImage: "url('./assets/img/buffyBackground.png')",
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed'
    }

    if(show === 'buffy'){
        return backgroundStyleAngel
    } else {
        return backgroundStyleBuffy
    }
  }

  return (
    <div style={whichBackground()} className="body-container">
      <HeaderContainer />
      <MainViewContainer />
    </div>
  )
}

export default withHeaderContext(App);