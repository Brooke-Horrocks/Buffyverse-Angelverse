import React from "react";

import FormContainer from '../Forms/FormContainer';
import EditForm from '../Forms/EditForm';
import BookInfo from './BookInfo';

// Toggle to form when edit button clicked, otherwise, display book info
function Toggling({ on, toggle, book, handleSubmit, id }) {
    return (
        on ? 
            <FormContainer inputs={book}>
                {({ handleChange, inputs}) => (
                    <EditForm toggle={toggle} handleSubmit={handleSubmit(book._id, inputs)} handleChange={handleChange} inputs={inputs} id={id} />
                )}
            </FormContainer>
            :
            <BookInfo book={book} toggle={toggle} />
    )
}

export default Toggling;