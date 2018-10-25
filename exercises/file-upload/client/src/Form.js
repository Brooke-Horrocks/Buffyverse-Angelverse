import React, { Component, createRef } from 'react'

export default class Form extends Component {
    constructor(){
        super();
        this.uploader = createRef();
    }

    render() {
        return (
            <form onSubmit={this.props.submit(this.uploader)}>
                <input name="file" ref={this.uploader} type="file" placeholder="Please upload a .PNG or .JPG file only"/>
                <button>Upload</button>
            </form>
        )
    }
}
