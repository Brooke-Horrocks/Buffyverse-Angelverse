import React from 'react'

import { withHeaderContext } from './Header/HeaderData';
import { withShowContext } from './Header/ShowData';

import Loading from './Loading';
import ErrorHandling from './ErrorHandling';
import TitleContent from './TitleContent';

function Title({ show, buffyShowData, angelShowData, showloading, showErr }) {
    return(
        <Loading loading={showloading}>
            <ErrorHandling err={showErr}>
                <TitleContent show={show} buffy={buffyShowData} angel={angelShowData}/>
            </ErrorHandling>
        </Loading>
    )
}

export default withHeaderContext(withShowContext(Title));