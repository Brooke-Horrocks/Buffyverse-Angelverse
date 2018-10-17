import React from 'react';
import HTMLParser from "react-html-parser"

import { withHeaderContext } from "../Header/HeaderData";
import { withShowContext } from "../Header/ShowData";

import Title from '../Title';
import ErrorHandling from '../ErrorHandling';
import Loading from '../Loading';

function Home({ show, buffyShowData, angelShowData, showLoading, showErr }) {
    return (
        <Loading loading={showLoading}>
            <ErrorHandling err={showErr}>
                <Title />
                {show === 'buffy' ?
                    <div className="show-summary">{HTMLParser(buffyShowData.summary)}</div>
                    :
                    <div className="show-summary">{HTMLParser(angelShowData.summary)}</div>
                }
            </ErrorHandling>
        </Loading>
    )
}

export default withHeaderContext(withShowContext(Home));