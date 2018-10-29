//Store book to add in state

import React, { Component } from "react";
import axios from "axios";

import AddForm from './AddForm';

export default class Form extends Component {
    constructor(props){
        super();
        this.state ={
            title: "",
            author: "",
            genre: "",
            bookCollection: "",
            synopsis: "",
            thoughts: "",
            price: "",
            recommendedBy: ""
        }
        this._handleSubmit = this._handleSubmit.bind(this);
        this._handleChange = this._handleChange.bind(this);
    }

    //Post to the database
    _handleSubmit(event){
        event.preventDefault();
        axios.post("/api/books", this.state)
            //FIXME: Fix .then and .catch
            .then(response => console.log(response))
            .catch(err => console.log(err))
    }
    //Update state
    _handleChange(event){
        const { target } = event;
        const value = target.type === "checkbox" ? target.checked : target.value;
        this.setState({ [target.name]: value })
    }

    render() {
        return (
            <AddForm 
            handleSubmit={this._handleSubmit}
            handleChange={this._handleChange}
            inputs={this.state}
            toggle={this.props.toggle}
            />
        )
    }
};