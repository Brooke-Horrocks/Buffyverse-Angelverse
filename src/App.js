import './assets/css/styles.css'

import React from 'react';

import HeaderContainer from './Header/HeaderContainer';
import MainViewContainer from './Main-View/MainViewContainer';

function App() {
  

  return (
    <div className="body-container">
      <HeaderContainer />
      <MainViewContainer />
    </div>
  )
}

export default App;