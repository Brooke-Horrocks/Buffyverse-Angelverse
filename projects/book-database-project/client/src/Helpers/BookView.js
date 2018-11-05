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

{/* <FormContainer inputs={book}>
                    {({ handleChange, inputs }) => (
                        <Toggler>
                            {({ on, toggle }) => (
                                <Fragment>
                                    <Button onClick={toggle}>
                                        <EditIcon />
                                        Edit Book
                                    </Button>
                                    <form action="" onSubmit={handlePutBook(book._id, inputs)}>
                                        <h4>Author:</h4>
                                        {
                                            on ?
                                                <input name="author" onChange={handleChange} type="text" value={inputs.author} />
                                                :
                                                <p onClick={toggle}>{book.author}</p>
                                        }
                                        <h4>Price:</h4>
                                        {
                                            on ?
                                                <input name="price" onChange={handleChange} type="text" value={inputs.price} />
                                                :
                                                <p onClick={toggle}>{book.price}</p>
                                        }
                                        <button onClick={toggle}>Edit</button>
                                    </form>
                                </Fragment>
                            )}
                        </Toggler>
                    )}
                </FormContainer>
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
                <p>{book.recommendedBy}</p> */}