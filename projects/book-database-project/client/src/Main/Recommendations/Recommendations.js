import React from "react";
import { withToggler } from 'atom-lib';
import { withBookContext} from "../../Helpers/BookData";

import BookList from "../../Helpers/BookList";
import FormContainer from "../../Forms/FormContainer";
import AddForm from "../../Forms/AddForm";

function Recommendations({ toggle, on, handlePostBook }) {
    return (
        <div className="my-books-container">
            <div className="page-header">
                <h2>Recommendations</h2>
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

export default withToggler({ on: false })(withBookContext(Recommendations));