import React from 'react'

function AddForm(props){
    return(
        <form onSubmit={props.handleSubmit}>
            <h1>{props.inputs.name}</h1>
            <label>Name:</label>
            <br/>
            <input name="name" onChange={props.handleChange} value={props.inputs.name} type="text" placeholder="Name"/>
            <br/>
            <button>Add to List</button>
        </form>
    )
    
}

export default AddForm;