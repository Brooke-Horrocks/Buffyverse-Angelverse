import React from "react";
import { withToggler } from "atom-lib";

import Divider from "@material-ui/core/Divider"
import Button from "@material-ui/core/Button"
import DeleteIcon from "@material-ui/icons/DeleteRounded";
import EditIcon from "@material-ui/icons/Edit";

function BookView({ book, on, toggle }) {
    return (
        <div className="book-view-container">
            <div className="book-view-header-container">
                <h3 onClick={toggle} className="book-title">{book.title}</h3>
                <div className="icon-container">
                    <Button>
                        <EditIcon />
                    </Button>
                    <Button>
                        <DeleteIcon />
                    </Button>
                </div>
            </div>
            <div className={on ? "book-view-body-container" : "hidden"}>
                <Divider />
                <h4>Author:</h4>
                <p>{book.author}</p>
                <h4>Genre:</h4>
                <p>{book.genre}</p>
                <h4>Synopsis:</h4>
                <p>{book.synopsis}</p>
                <h4>Thoughts:</h4>
                <p>{book.thoughts}</p>
                <h4>Price:</h4>
                <p>{book.price}</p>
                <h4>Recommended By:</h4>
                <p>{book.recommendedBy}</p>
            </div>
            
        </div>
    )
}

export default withToggler({ on: false })(BookView);