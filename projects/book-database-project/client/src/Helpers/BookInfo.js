import React from "react";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";

function BookInfo({ book, toggle }) {
    return (
        <div>
            <Button variant="contained" color="primary" onClick={toggle}>
                <EditIcon />
                Edit
            </Button>
            <h4>Author:</h4>
            <p onClick={toggle}>{book.author}</p>
            <h4>Genre:</h4>
            <p onClick={toggle}>{book.genre}</p>
            <h4>Synopsis:</h4>
            <p onClick={toggle}>{book.synopsis}</p>
            <h4>Thoughts:</h4>
            <p onClick={toggle}>{book.thoughts}</p>
            <h4>Price:</h4>
            <p onClick={toggle}>{book.price}</p>
            <h4>Recommended By:</h4>
            <p onClick={toggle}>{book.recommendedBy}</p>
        </div>
    )
}

export default BookInfo;