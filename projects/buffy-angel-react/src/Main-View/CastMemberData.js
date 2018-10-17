import React, { createContext, Component } from 'react'
import axios from "axios";

export const CastMemberContext = createContext();

const buffyUrl = "http://api.tvmaze.com/shows/427/cast";
const angelUrl = "http://api.tvmaze.com/shows/428/cast";

export default class CastMemberData extends Component {
    constructor(){
        super();
        this.state = {
            castLoading: true,
            castErr: null,
            cast: []
        }
    }

    _getCastData(url){
        return axios.get(url).then(response => response.data)
    }
    _addShow(show){
        return cast => cast.map(castMember => {
            castMember.showName = show;
            return castMember;
        })
    }
    _handleCastData(){
        return this._getCastData(buffyUrl)
            .then(buffyCast => {
                return this._getCastData(angelUrl)
                    .then(angelCast => (
                        [
                            ...this._addShow("buffy")(buffyCast),
                            ...this._addShow("angel")(angelCast)
                        ]
                    ))
            })
    }

    componentDidMount(){
        this._handleCastData()
            .then(cast => this.setState({
                castLoading: false,
                castErr: null, 
                cast
            }))
            //TODO: .catch
    }

    render() {
        const props = {
            ...this.state
        }

        return (
            <CastMemberContext.Provider value={props}>
                {this.props.children}
            </CastMemberContext.Provider>
        )
    }
}

export const withCastMemberContext = Comp => props => (
    <CastMemberContext.Consumer>
        {value => <Comp {...value}{...props}/>}
    </CastMemberContext.Consumer>
)