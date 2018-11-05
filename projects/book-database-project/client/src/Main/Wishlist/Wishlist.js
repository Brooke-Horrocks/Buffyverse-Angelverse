import React from "react";
import { withToggler } from 'atom-lib';
import { withBookContext } from "../../Helpers/BookData";

import BookList from "../../Helpers/BookList";
import FormContainer from "../../Forms/FormContainer";
import AddForm from "../../Forms/AddForm";

function Wishlist({ toggle, on, handlePostBook }) {
    return (
        //Figure out left sidebar and filtering by genre later
        <div className="my-books-container">
            <div className="page-header">
                <h2>Wishlist</h2>
            </div>
            <div className={on ? "form" : "hidden"}>
                <FormContainer inputs={{
                    title: "",
                    author: "",
                    genre: "",
                    bookCollection: "",
                    synopsis: "",
                    thoughts: "",
                    price: "",
                    recommendedBy: ""
                }} >
                    {props => (
                        <AddForm {...props} handleSubmit={handlePostBook} toggle={toggle} />
                    )}
                </FormContainer>
            </div>
            <BookList />
        </div>
    )
}

export default withToggler({ on: false })(withBookContext(Wishlist));