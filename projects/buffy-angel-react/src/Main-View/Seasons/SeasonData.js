import React, { createContext, Component } from 'react';
import axios from "axios";

export const SeasonContext = createContext();

const buffyUrl = "http://api.tvmaze.com/shows/427/seasons";
const angelUrl = "http://api.tvmaze.com/shows/428/seasons";

export default class SeasonData extends Component {
    constructor() {
        super();
        this.state = {
            seasonLoading: true,
            seasonErr: null,
            seasons: []
        }
    }

    _getSeasonData(url) {
        return axios.get(url).then(response => response.data)
    }
    _addShow(show) {
        return seasons => seasons.map(season => {
            season.showName = show;
            return season;
        })   
    }
    _handleSeasonData() {
        return this._getSeasonData(buffyUrl)
            .then(buffySeasons => {
                return this._getSeasonData(angelUrl)
                    .then(angelSeasons =>(
                        [
                            ...this._addShow("buffy")(buffySeasons),
                            ...this._addShow("angel")(angelSeasons)
                        ]
                    ))
            })
    }

    componentDidMount(){
        this._handleSeasonData()
            .then(seasons => this.setState({
                seasonLoading: false,
                seasonErr: null,
                seasons
            }))
            //TODO: .catch
    }

    render() {
        const props = {
            ...this.state
        }

        return (
            <SeasonContext.Provider value={props}>
                {this.props.children}
            </SeasonContext.Provider>
        )
    }
}

export const withSeasonContext = Comp => props => (
    <SeasonContext.Consumer>
        {value => <Comp {...value}{...props} />}
    </SeasonContext.Consumer>
)