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
            books: []
        }
        this.handleDeleteBook = this.handleDeleteBook.bind(this);
        this.handlePostBook = this.handlePostBook.bind(this);
        this.handlePutBook = this.handlePutBook.bind(this);
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

    // Post to the database
    handlePostBook(book) {
        return e => {
            axios.post(booksUrl, book)
                .then(response => {
                    this.setState(prevState => ({
                        books: [...prevState.books, book]
                    }))
                })
                .catch(err => this.setState({ err }))
        }
    }
    handlePutBook(id, editedBook){
        return e => {
            axios.put(`${booksUrl}/${id}`, editedBook)
                .then(response => {
                    this.setState(prevState => ({
                        books: [...prevState.books.map(book => book._id === id ? response.data : book)]
                    }))
                })
                .catch(err => this.setState({ err }))
        }
    }
    // Delete book from database
    handleDeleteBook(id) {
        return e => {
            axios.delete(`${booksUrl}/${id}`)
            .then(response => {
                this.setState(prevState => ({
                    books: prevState.books.filter(book => book._id !== id)
                }))
            })
            .catch(err => console.log(err))
        }
    }

    componentDidMount() {
        this._handleBookData()
            .then(books => this.setState({
                loading: false,
                err: null,
                books
            }))
            .catch(err => this.setState({ err }))
    }

    render() {
        const props = {
            handlePostBook: this.handlePostBook,
            handleDeleteBook: this.handleDeleteBook,
            handlePutBook: this.handlePutBook,
            ...this.state
        }
        return (
            <BookContext.Provider value={props} >
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