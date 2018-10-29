// IN BOOK DATA MAYBE HAVE CURRENTGENRE AND CURRENTCOLLECTION SO INSTEAD OF A STRING LITERAL IT CAN BE AN OBJECT FROM STATE

import React from "react";
import { withRouter } from "react-router-dom";

import { withBookContext } from './BookData';

import Loading from './Loading';
import ErrorHandling from './ErrorHandling';
import BookView from './BookView';

function BookList({ books, loading, err, location }) {
    // Function to filter by bookCollection 'owned'
    const filterBookCollection = (bookCollection) => {
        return books => books.filter(book => book.bookCollection === bookCollection)
    }

    // Variable with the filtered list of owned books
    const filteredByCollection = filterBookCollection(location.pathname.substring(1))(books);

    // Map through list of filtered books to create elements of bookViews for each one
    const bookElements = filteredByCollection.map(book => (
        <BookView key={book._id} book={book} />
    ))

    return (
        <Loading loading={loading}>
            <ErrorHandling err={err}>
                {bookElements}
            </ErrorHandling>
        </Loading>
    )
}

export default withRouter(withBookContext(BookList))