import React from "react";

function AddForm({ handleSubmit, handleChange, inputs, toggle }) {
    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Book Info</legend>

                <label>
                    Title:
                    <input className="book-info-input" onChange={handleChange} name="title" value={inputs.title} placeholder="The name of this book" type="text"/> 
                </label>

                <label>
                    Author:
                    <input className="book-info-input" onChange={handleChange} name="author" value={inputs.author} placeholder="Who wrote it" type="text"/>
                </label>

                <label>
                    Synopsis:
                    <input className="book-info-input" onChange={handleChange} name="synopsis" value={inputs.synopsis} placeholder="What it's about" type="text"/>
                </label>
            </fieldset>
            <fieldset>
                <legend>Genre</legend>

                <label className="radio-label">
                    <input className="radio-input" onChange={handleChange} name="genre" value="Horror" type="radio" checked={inputs.genre === 'Horror'}/>
                    Horror
                </label>

                <label className="radio-label">
                    <input onChange={handleChange} name="genre" value="Fantasy" type="radio" checked={inputs.genre === 'Fantasy'}/>
                    Fantasy
                </label>

                <label className="radio-label">
                    <input onChange={handleChange} name="genre" value="Sci-fi" type="radio" checked={inputs.genre === 'Sci-fi'}/>
                    Sci-fi
                </label>

                <label className="radio-label">
                    <input onChange={handleChange} name="genre" value="Romance" type="radio" checked={inputs.genre === 'Romance'}/>
                    Romance
                </label>
            </fieldset>

            <fieldset>
                <legend>Collection</legend>

                <label className="radio-label">
                    <input onChange={handleChange} name="bookCollection" value="owned" type="radio" checked={inputs.bookCollection === 'owned'}/>
                    Owned
                </label>

                <label className="radio-label">
                    <input onChange={handleChange} name="bookCollection" value="wishlist" type="radio" checked={inputs.bookCollection === 'wishlist'}/>
                    Wishlist
                </label>

                <label className="radio-label">
                    <input onChange={handleChange} name="bookCollection" value="recommendations" type="radio" checked={inputs.bookCollection === 'recommendations'}/>
                    Recommendations
                </label>
            </fieldset>

            <fieldset>
                <legend>Extra</legend>

                <label>
                    Thoughts:
                    <input className="book-extra-input" onChange={handleChange} name="thoughts" value={inputs.thoughts} placeholder="How I feel about it" type="text"/>
                </label>

                <label>
                    Price:
                    <input className="book-extra-input" onChange={handleChange} name="price" value={inputs.price} placeholder="0" type="number"/>
                </label>

                <label>
                    Recommended:
                    <input className="book-extra-input" onChange={handleChange} name="recommendedBy" value={inputs.recommendedBy} placeholder="Who recommended it" type="text"/>
                </label>
            </fieldset>

            <button onClick={toggle} onSubmit={handleSubmit}>Add Book!</button>
        </form>
    )
}

export default AddForm;