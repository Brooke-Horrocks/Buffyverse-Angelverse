import { Component } from 'react'

import axios from "axios";

const vsUrl = "https://vschool-cors.herokuapp.com?url=" //Get past CORS
const apiUrl = "https://swapi.co/api/people" //Api Url

export default class Characters extends Component {
    constructor(){
        super();
        this.state = {
            characters: [],
            loading: true,
            err: null
        }
    }

    getCharacterData(url){
        return axios.get(url).then(response => response.data.results);
    }
    handleGetCharacterData(){
        this.getCharacterData(vsUrl + apiUrl)
            .then(characters => this.setState({
                characters,
                loading: false,
                err: null
            }))
    }

    componentDidMount(){
        this.handleGetCharacterData();
    }

    render() {
        return (this.props.render(this.state))
    }
}
