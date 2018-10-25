import React, { Component, createContext } from "react";
import axios from "axios";

export const BookContext = createContext();

const booksUrl = "http://localhost:8000/api/books/"

export default class BookData extends Component {
    constructor(){
        super();
        this.state = {
            loading: true,
            err: null,
            books: []
        }
    }

    _getBookData(url){
        return axios.get(url).then(response => response.data)
    }
    //TODO: Confirm this works
    _handleBookData(){
        return this._getBookData(booksUrl)
            .then(books => (
                [books]
            ))
    }

    //TODO: Confirm if catching error correctly?
    componentDidMount(){
        this._handleBookData()
            .then(books => this.setState({
                loading: false,
                err: null,
                books
            }))
            .catch(err => this.setState({
                err
            }))
    }

    render() {
        const props = {
            ...this.state
        }

        return (
            <BookContext.Provider value={props}>
                {this.props.children}
            </BookContext.Provider>
        )
    }
}

export const withBookContext = Comp => props => (
    <BookContext.Consumer>
        {value => <Comp {...value} {...props} />}
    </BookContext.Consumer>
)