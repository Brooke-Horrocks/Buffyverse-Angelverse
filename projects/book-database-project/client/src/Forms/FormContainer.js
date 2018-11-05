import { Component } from 'react'

export default class FormContainer extends Component {
    constructor(props){
        super(props);
        this.state = props.inputs

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange({target: {name, value}}){
        this.setState({[name]: value})
    }
    
    render() {
        const props = {
            inputs: this.state,
            handleChange: this.handleChange
        }
        return (
           this.props.children(props)
        )
    }
}