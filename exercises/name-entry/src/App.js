import "./styles.css"
import React, { Component } from 'react';
import Form from "./Form";

class App extends Component {
  constructor(){
    super();
    this.state = {
      names: []
    }
    this.addName = this.addName.bind(this);
  }

  addName(name){
    this.setState(prevState => ({
      names: [name, ...prevState.names]
    }))
    
  }

  render(){
    return(
      <div>
        <Form submit={ inputs => this.addName(inputs.name)}/>
        <ul>
          {this.state.names.map((name, index) => 
            <li key={name + index}>{name}</li>
          )}
        </ul>
      </div>
    )
  }
}

export default App;