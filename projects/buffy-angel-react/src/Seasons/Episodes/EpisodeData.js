import React, { createContext, Component } from 'react'
import axios from "axios";

export const EpisodeContext = createContext();

const buffyUrl = "http://api.tvmaze.com/shows/427/episodes";
const angelUrl = "http://api.tvmaze.com/shows/428/episodes";

export default class EpisodeData extends Component {
    constructor() {
        super();
        this.state = {
            episodeLoading: true,
            episodeErr: null,
            episodes: []
        }
    }

    _getEpisodeData(url) {
        return axios.get(url).then(response => response.data);
    }
    _addShow(show) {
        return episodes => episodes.map(episode => {
            episode.showName = show;
            return episode;
        })
    }
    _handleEpisodeData() {
        return this._getEpisodeData(buffyUrl)
            .then(buffyEpisodes => {
                return this._getEpisodeData(angelUrl)
                    .then(angelEpisodes => (
                        [
                            ...this._addShow("buffy")(buffyEpisodes),
                            ...this._addShow("angel")(angelEpisodes)
                        ]
                    ))
            })
    }

    componentDidMount() {
        this._handleEpisodeData()
            .then(episodes => this.setState({
                episodeLoading: false,
                episodeErr: null,
                episodes
            }))
            //TODO: .catch
    }

    render() {
        const props = {
            ...this.state
        }
        
        return (
            <EpisodeContext.Provider value={props}>
                {this.props.children}
            </EpisodeContext.Provider>
        )
    }
}

export const withEpisodeContext = Comp => props => (
    <EpisodeContext.Consumer>
        {value => <Comp {...value}{...props} />}
    </EpisodeContext.Consumer>
)