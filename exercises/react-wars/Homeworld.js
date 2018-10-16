import React, { Component } from 'react'

export default class Homeworld extends Component {
    constructor(){
        this.state = {
            homeworldData: null,
            loading: true
        }
    }
    componentDidMount(){
        // send out request for data
    }
    render() {
        return (
            <div>
                {/* render loading screen and homeworld data */}
            </div>
        )
    }
}
