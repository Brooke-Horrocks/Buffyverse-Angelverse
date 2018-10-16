import React, { Component } from 'react';
import axios from 'axios';

const pokeUrl = "https://vschool-cors.herokuapp.com?url=https://pokeapi.co/api/v2/pokemon";

export default class PokemonList extends Component{
    constructor(){
        super();
        this.state = {
            data: [],
            loading: true, 
            err: null
        }
    }

    getPokemon(){
        return axios.get(pokeUrl)
    }

    componentDidMount(){
        this.getPokemon()
            .then(response => {
                this.setState({data: response.data.results, loading: false, err: null})
            })
            .catch(err => {this.setState({data: null, loading: false, err: {message: "404, data not found"}})})
    }

    render(){
        const { data, loading, err } = this.state;
        const pokemonList = data.map((pokemon, i) => <li key = {i}>{pokemon.name}</li>);
        return(
            <div>
                {loading ? 
                    <div>...Loading</div>
                    :
                    err ? 
                    <p>err.message</p>
                    :
                    <ul>
                        {pokemonList}
                    </ul>
                }
            </div>
        )
    }
}