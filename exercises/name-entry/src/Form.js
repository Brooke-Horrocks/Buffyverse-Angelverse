import React, { Component } from 'react';
import AddForm from "./AddForm";

class Form extends Component{
    constructor(){
        super();
        this.state = {name: ""}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const { target } = event;
        this.setState({[target.name]: target.value})
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.submit(this.state);
        this.setState({name: ""})
    }

    render(){
        return(
            <AddForm 
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            inputs={this.state}
            />
        )
    }
}

export default Form;

// import React from 'react';

// const GameControls = ({_initializeGameCanvas, _handleChange, _handleSelectChange, maxScore, initialVelocity, p1Paddle, p2Paddle, ball}) => {

//     return (
//         <article>
//           <form>
//             <label>
//               Max Score: 
//               <input name="maxScore" value={maxScore} type="number" onChange={_handleChange}></input>
//             </label>
//             <label>
//               Initial Velocity:
//               <select name="initialVelocity" value={initialVelocity} onChange={_handleSelectChange}>
//                 <option value="1">1</option>
//                 <option value="2">2</option>
//                 <option value="3">3</option>
//               </select>
//             </label>
//             <label>
//               P1 Paddle: 
//               <input name="p1Paddle" value={p1Paddle} type="color" onChange={_handleChange}></input>
//             </label>
//             <label>
//               P2 Paddle: 
//               <input name="p2Paddle" value={p2Paddle} type="color" onChange={_handleChange}></input>
//             </label>
//             <label>
//               Ball: 
//               <input name="ball" value={ball} type="color" onChange={_handleChange}></input>
//             </label>
//           <button onClick={_initializeGameCanvas}></button>
//           </form>
//         </article>
//     )
// }

// export default GameControls;