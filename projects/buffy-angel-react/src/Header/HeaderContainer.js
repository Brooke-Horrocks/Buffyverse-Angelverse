import React from 'react';
import RightMenu from './RightMenu';
import LeftMenu from './LeftMenu';

function HeaderContainer() {
    return (
        <div className="header-container">
            <LeftMenu />
            <RightMenu />
        </div>
    )
}

export default HeaderContainer;