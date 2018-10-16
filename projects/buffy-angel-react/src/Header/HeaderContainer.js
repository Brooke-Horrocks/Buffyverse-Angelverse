import React from 'react';
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';

function HeaderContainer() {
    return (
        <div className="header-container">
            <LeftMenu />
            <RightMenu />
        </div>
    )
}

export default HeaderContainer;