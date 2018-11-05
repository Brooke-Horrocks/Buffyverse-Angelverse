import React from "react";

import Button from "@material-ui/core/Button"

function AddForm({ handleSubmit, handleChange, inputs }) {
    return (
        <form className="add-form" onSubmit={handleSubmit(inputs)}>
            <fieldset>
                <legend>Book Info</legend>

                <label>
                    <input onChange={handleChange} name="title" value={inputs.title} placeholder="Title" type="text"/> 
                </label>

                <label>
                    <input onChange={handleChange} name="author" value={inputs.author} placeholder="Author" type="text"/>
                </label>

                <label>
                    <input onChange={handleChange} name="synopsis" value={inputs.synopsis} placeholder="Synopsis" type="text"/>
                </label>
            </fieldset>
            <fieldset>
                <legend>Genre</legend>

                <label className="radio-label">
                    <input className="radio-input" onChange={handleChange} name="genre" value="Horror" type="radio" checked={inputs.genre === 'Horror'}/>
                    Horror
                </label>

                <label className="radio-label">
                    <input className="radio-input" onChange={handleChange} name="genre" value="Fantasy" type="radio" checked={inputs.genre === 'Fantasy'}/>
                    Fantasy
                </label>

                <label className="radio-label">
                    <input className="radio-input" onChange={handleChange} name="genre" value="Sci-fi" type="radio" checked={inputs.genre === 'Sci-fi'}/>
                    Sci-fi
                </label>

                <label className="radio-label">
                    <input className="radio-input" onChange={handleChange} name="genre" value="Romance" type="radio" checked={inputs.genre === 'Romance'}/>
                    Romance
                </label>
            </fieldset>

            <fieldset>
                <legend>Collection</legend>

                <label className="radio-label">
                    <input className="radio-input" onChange={handleChange} name="bookCollection" value="owned" type="radio" checked={inputs.bookCollection === 'owned'}/>
                    Owned
                </label>

                <label className="radio-label">
                    <input className="radio-input" onChange={handleChange} name="bookCollection" value="wishlist" type="radio" checked={inputs.bookCollection === 'wishlist'}/>
                    Wishlist
                </label>

                <label className="radio-label">
                    <input className="radio-input" onChange={handleChange} name="bookCollection" value="recommendations" type="radio" checked={inputs.bookCollection === 'recommendations'}/>
                    Recommendations
                </label>
            </fieldset>

            <fieldset>
                <legend>Extra</legend>

                <label>
                    <input onChange={handleChange} name="thoughts" value={inputs.thoughts} placeholder="Thoughts" type="text"/>
                </label>

                <label>
                    <input onChange={handleChange} name="price" value={inputs.price} placeholder="price" type="number"/>
                </label>

                <label>
                    <input onChange={handleChange} name="recommendedBy" value={inputs.recommendedBy} placeholder="Recommended By" type="text"/>
                </label>
            </fieldset>
            <Button variant="contained" color="primary" type="submit" className="form-add-button">Add Book!</Button>           
        </form>
    )
}

export default AddForm;