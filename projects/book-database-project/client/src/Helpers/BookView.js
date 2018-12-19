import React from "react";

import { withToggler, Toggler } from "atom-lib";
import Toggling from "./Toggling";

import Divider from "@material-ui/core/Divider"
import Button from "@material-ui/core/Button"
import DeleteIcon from "@material-ui/icons/DeleteForeverRounded";

function BookView({ book, on, toggle, handleDeleteBook, handlePutBook }) {
    return (
        <div className="book-view-container">
            <div className="book-view-header-container">
                <h3 onClick={toggle} className="book-title">{book.title}</h3>
                <div className="icon-container">
                    <Button variant="outlined" size="small" color="primary" onClick={handleDeleteBook(book._id)}>
                        <DeleteIcon fontSize="small"/>
                        Delete
                    </Button>
                </div>
            </div>
            <Divider />
            <div className={on ? "book-view-body-container" : "hidden"}>
                <Toggler>
                    {({ on, toggle }) => (
                        <Toggling on={on} toggle={toggle} book={book} handleSubmit={handlePutBook} id={book._id}/>
                    )}
                </Toggler>
            </div>
        </div>
    )
}

export default withToggler({ on: false })(BookView); 