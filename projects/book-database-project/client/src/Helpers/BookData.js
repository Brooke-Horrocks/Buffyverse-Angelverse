//TODO: Figure out how to make page refresh after deleting or adding, etc. 

import React, { Component, createContext } from "react";
import axios from "axios";

export const BookContext = createContext();

const booksUrl = "/api/books";

export default class BookData extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            err: null,
            currentGenre: null, //FIXME: Maybe instead of this use withRouter for the same thing?
            books: []
        }
        this._handleDeleteBook = this._handleDeleteBook.bind(this);
    }

    _getBookData(url) {
        return axios.get(url).then(response => response.data)
    }
    _handleBookData() {
        return this._getBookData(booksUrl)
            .then(books => (
                [
                    ...books
                ]
            ))
    }
    _handleDeleteBook(id) {
        return e => axios.delete(`${booksUrl}/${id}`)
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
    }

    componentDidMount() {
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
    componentDidUpdate(prevState) {
        if (this.state !== prevState) {
            //Is this the best way to re-render once book has been added?
        }
    }

    render() {
        const props = {
            handleDeleteBook: this._handleDeleteBook,
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