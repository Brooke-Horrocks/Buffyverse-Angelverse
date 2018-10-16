import React, { createContext, Component } from 'react'
import axios from "axios";

export const CastMemberContext = createContext();

const buffyUrl = "http://api.tvmaze.com/shows/427/cast";
const angelUrl = "http://api.tvmaze.com/shows/428/cast";

export default class CastMemberData extends Component {
    constructor(){
        super();
        this.state = {
            cast: []
        }
    }

    getBuffyCastData(url){
        axios.get(url).then(response => response.data)
    }    
    getAngelCastData(url){
        axios.get(url).then(response => response.data)
    }    
    handleBuffyCastData(){
        this.getBuffyCastData(buffyUrl)
            .then(cast => this.setState(prevState => ({
                cast: prevState.cast.concat(cast)
            })))
    }
    handleAngelCastData(){
        this.getAngelCastData(angelUrl)
            .then(cast => this.setState(prevState => ({
                cast: prevState.cast.concat(cast)
            })))
    }

    componentDidMount(){
        this.handleBuffyCastData()
        this.handleAngelCastData()
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