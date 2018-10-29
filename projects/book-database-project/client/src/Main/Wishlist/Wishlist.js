import React from "react";
import { withToggler } from 'atom-lib';

import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/AddCircleOutline"

import BookList from "../../Helpers/BookList";
import Form from '../../Helpers/Form';

function Wishlist({ toggle, on }) {
    return (
        //Figure out left sidebar and filtering by genre later
        <div className="my-books-container">
            <div className="page-header">
                <h2>Wishlist</h2>
                <Button onClick={toggle}>
                    <AddIcon />
                </Button>
            </div>
            <div className={on ? "form" : "hidden"}>
                <Form />
            </div>
            <BookList />
        </div>
    )
}

export default withToggler({ on: false })(Wishlist);