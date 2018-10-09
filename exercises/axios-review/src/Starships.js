import React, { Component } from 'react';

import axios from "axios";

import StarshipView from './StarshipView';

const vsUrl = "https://vschool-cors.herokuapp.com?url=" //Get past CORS
const apiUrl = "https://swapi.co/api/starships" //Api Url

export default class Starships extends Component {
    constructor(){
        super();
        this.state = {
            starships: [],
            loading: true,
            err: null
        }
    }

    getStarshipsData(url){
        return axios.get(url).then(response => response.data.results)
    }
    handleGetStarships(){
        this.getStarshipsData(vsUrl + apiUrl)
            .then(starships => this.setState({
                starships,
                loading: false,
                err: null
            }))
    }

    componentDidMount(){
        this.handleGetStarships();
    }

    render() {
        const { loading, err, starships } = this.state;
        const starshipComponents = starships.map((starship, i) =>(
            <StarshipView key={i} {...starship}/>
        ))

        return(
            <div>
                {loading ? 
                    <div>...Loading</div>
                    :
                    err ?
                        <div>Data Unavailable</div>
                        :
                        <div>{starshipComponents}</div>
                }
            </div>
        )
    }
}
