import React from "react";
import Button from "@material-ui/core/Button";
import ClearIcon from "@material-ui/icons/Clear"

function EditForm({ inputs, handleChange, toggle, handleSubmit, id }) {
    return (
        <form className="edit-form" onSubmit={handleSubmit(id, inputs)}>
            <div className="edit-form-container">
                <Button variant="contained" color="primary" onClick={toggle}>
                    <ClearIcon />
                    Cancel
                </Button>
                <h4>Author:</h4>
                <input onChange={handleChange} name="author" value={inputs.author} type="text" />
                <h4>Genre:</h4>
                <label className="radio-label">
                    <input className="radio-input" onChange={handleChange} name="genre" value="Horror" type="radio" />
                    Horror
                </label>
                <label className="radio-label">
                    <input className="radio-input" onChange={handleChange} name="genre" value="Fantasy" type="radio" />
                    Fantasy
                </label>
                <label className="radio-label">
                    <input className="radio-input" onChange={handleChange} name="genre" value="Sci-fi" type="radio" />
                    Sci-Fi
                </label>
                <label className="radio-label">
                    <input className="radio-input" onChange={handleChange} name="genre" value="Romance" type="radio" />
                    Romance
                </label>
                <h4>Synopsis:</h4>
                <input onChange={handleChange} name="synopsis" value={inputs.synopsis} type="text" />
                <h4>Thoughts:</h4>
                <input onChange={handleChange} name="thoughts" value={inputs.thoughts} type="text" />
                <h4>Price:</h4>
                <input onChange={handleChange} name="price" value={inputs.price} type="number" />
                <h4>Recommended By:</h4>
                <input onChange={handleChange} name="recommendedBy" value={inputs.recommendedBy} type="text" />
                <h4>Collection:</h4>
                <label className="radio-label">
                    <input className="radio-input" onChange={handleChange} name="bookCollection" value="owned" type="radio" />
                    Owned
                </label>
                <label className="radio-label">
                    <input className="radio-input" onChange={handleChange} name="bookCollection" value="wishlist" type="radio" />
                    Wishlist
                </label>
                <label className="radio-label">
                    <input className="radio-input" onChange={handleChange} name="bookCollection" value="recommendations" type="radio" />
                    Recommendations
                </label>
            </div>
            
            <Button variant="contained" color="secondary" onClick={toggle}>Submit Edit!</Button>
        </form>
    )
}

export default EditForm;