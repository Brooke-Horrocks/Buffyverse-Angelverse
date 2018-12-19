import React from "react";

import { withRouter } from "react-router-dom";
import { withBookContext } from './BookData';

import Loading from './Loading';
import ErrorHandling from './ErrorHandling';
import BookView from './BookView';

function BookList({ books, loading, err, location, handleDeleteBook, handlePutBook }) {
    // Function to filter by bookCollection
    const filterBookCollection = (bookCollection) => {
        return books => books.filter(book => book.bookCollection === bookCollection)
    }

    // Variable with the filtered list of books
    const filteredByCollection = filterBookCollection(location.pathname.substring(1))(books);

    // Map through list of filtered books to create elements of bookViews for each one
    const bookElements = filteredByCollection.map(book => (
        <BookView key={book._id} book={book} handleDeleteBook={handleDeleteBook} handlePutBook={handlePutBook} />
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