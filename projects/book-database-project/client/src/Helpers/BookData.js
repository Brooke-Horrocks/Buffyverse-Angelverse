import React, { Component, createContext } from "react";
import axios from "axios";

export const BookContext = createContext();

const booksUrl = "/api/books";

export default class BookData extends Component {
    constructor(){
        super();
        this.state = {
            loading: true,
            err: null,
            currentGenre: null, // Maybe instead of this use withRouter for the same thing?
            books: []
        }
    }

    _getBookData(url){
        return axios.get(url).then(response => response.data)
    }
    _handleBookData(){
        return this._getBookData(booksUrl)
            .then(books => (
                [
                    ...books
                ]
            ))
    }

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
    componentDidUpdate(prevState){
        if(this.state !== prevState){
            
        }
    }

    render() {
        const props = {
            toggleCollection: this._toggleCollection,
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