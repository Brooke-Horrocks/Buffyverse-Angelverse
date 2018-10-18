import React from 'react';
import { withHeaderContext } from '../Header/HeaderData';

import RightMenu from './RightMenu';
import LeftMenu from './LeftMenu';

import buffyBackground from '../assets/img/buffyBackground.png'
import angelBackground from '../assets/img/angelBackground.png'

function HeaderContainer({ show }) {
    const whichBackground = () => {
        const backgroundStyleAngel = {
          backgroundImage: `url(${angelBackground})`
        }
        const backgroundStyleBuffy = {
          backgroundImage: `url(${buffyBackground})`
        }
    
        if(show === 'buffy'){
            return backgroundStyleBuffy
        } else {
            return backgroundStyleAngel
        }
      }

    return (
        <div style={whichBackground()} className="header-container">
            <LeftMenu />
            <RightMenu />
        </div>
    )
}

export default withHeaderContext(HeaderContainer);