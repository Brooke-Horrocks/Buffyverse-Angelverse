import React, { Component } from 'react'
import axios from 'axios';

const baseUrl = '/api/bounties'

export default class App extends Component {

  _getBounties(url){
    return axios.get(url).then(response => response.data)
  }
  _addBounty(url, bounty){
    return axios.post(url, bounty).then(response => response.data)
  }

  componentDidMount(){
    this._getBounties(baseUrl)
      .then(bounties => console.log(bounties))
      
      this._addBounty(baseUrl, {firstName: "test", lastName: "test"})
      .then(bounty => console.log(bounty))
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
