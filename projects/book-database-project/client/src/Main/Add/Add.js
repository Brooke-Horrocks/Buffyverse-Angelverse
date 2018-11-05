import React from "react";
import { withBookContext } from '../../Helpers/BookData';

import FormContainer from "../../Forms/FormContainer";
import AddForm from '../../Forms/AddForm';

function Add({ handlePostBook }) {
    return (
        <div>
            <div className="page-header">
                <h2>Add a Book!</h2>
            </div>
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
                        <AddForm className="form-container" {...props} handleSubmit={handlePostBook} />
                    )}
            </FormContainer>
        </div>
    )
}

export default withBookContext(Add);