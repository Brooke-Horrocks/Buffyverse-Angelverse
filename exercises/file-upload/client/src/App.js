import React, { Component } from 'react'

import axios from "axios";

import Form from "./Form"

export default class App extends Component {
  constructor(){
    super();
    this._handleUpload = this._handleUpload.bind(this)
  }
  _sendFile(file){
    axios.post("/api/images", file)
  }
  _handleUpload(uploader){
    return e => {
      const formData = new FormData();
      formData.append("file", uploader.current.files[0])
      e.preventDefault();
      this._sendFile(formData)
    }
  }

  render() {
    return (
      <div>
        <Form submit={this._handleUpload}/>
      </div>
    )
  }
}
