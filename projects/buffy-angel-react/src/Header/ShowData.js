import React, { createContext, Component } from 'react';
import axios from "axios";

export const ShowContext = createContext();

const buffyUrl = "http://api.tvmaze.com/shows/427";
const angelUrl = "http://api.tvmaze.com/shows/428";

export default class ShowData extends Component {
    constructor(){
        super();
        this.state = {
            showLoading: true,
            showErr: null,
            buffyShowData: {},
            angelShowData: {}
        }
    }

    _getShowData(url){
        return axios.get(url).then(response => response.data)
    }
    _handleShowData(){
        return this._getShowData(buffyUrl)
            .then(buffyShow => {
                return this._getShowData(angelUrl)
                    .then(angelShow => (
                        [
                            buffyShow,
                            angelShow
                        ]
                    ))
            })
    }

    componentWillMount(){
        this._handleShowData()
            .then(shows => this.setState({
                showLoading: false,
                showErr: null,
                buffyShowData: shows[0],
                angelShowData: shows[1]
            }))
            //TODO: .catch
    }

    render() {
        const props = {
            ...this.state
        }
        return (
            <ShowContext.Provider value={props}>
                {this.props.children}
            </ShowContext.Provider>
        )
    }
}

export const withShowContext = Comp => props => (
    <ShowContext.Consumer>
        {value => <Comp {...value}{...props}/>}
    </ShowContext.Consumer>
)