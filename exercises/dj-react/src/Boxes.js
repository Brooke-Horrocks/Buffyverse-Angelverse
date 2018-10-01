import React, {Component} from 'react';


class Boxes extends Component{
    constructor(){
        super();
        this.state = {
            tLeft: "red",
            tRight: "blue",
            bLeft: "blue",
            bRight: "green"
        }
        this.smallTime = this.smallTime.bind(this);
        this.party = this.party.bind(this);
        this.profesh1 = this.profesh1.bind(this);
        this.profesh2 = this.profesh2.bind(this);
        this.bigTime1 = this.bigTime1.bind(this);
        this.bigTime2 = this.bigTime2.bind(this);
        this.bigTime3 = this.bigTime3.bind(this);
        this.bigTime4 = this.bigTime4.bind(this);
    }

    smallTime(){
        this.setState({
            tLeft: "white",
            tRight: "white",
            bLeft: "white",
            bRight: "white"
        })
    }

    party(){
        this.setState({
            tLeft: "purple",
            tRight: "purple"
        })
    }

    profesh1(){
        this.setState({
            bLeft: "blue"
        })
    }

    profesh2(){
        this.setState({
            bRight: "blue"
        })
    }

    bigTime1(){
        this.setState({
            //set state
        })
    }

    bigTime2(){
        this.setState({
            //set state
        })
    }

    bigTime3(){
        this.setState({
            //set state
        })
    }

    bigTime4(){
        this.setState({
            //set state
        })
    }

    render(){
        const { tLeft, tRight, bLeft, bRight } = this.state;
        return(
            <div>
                <div className="button-container">
                    <button onClick={this.smallTime}>Small Time</button>
                    <button onClick={this.party}>Party</button>
                    <button onClick={this.profesh1}>Profesh</button>
                    <button onClick={this.profesh2}>Profesh</button>
                </div>
                <div className="button-container">
                    <button>Big Time</button>
                    <button>Big Time</button>
                    <button>Big Time</button>
                    <button>Big Time</button>
                </div>
                <div className="box-container">
                    <div style={{backgroundColor: tLeft}} className="box"></div>
                    <div style={{backgroundColor: tRight}} className="box"></div>
                    <div style={{backgroundColor: bLeft}} className="box"></div>
                    <div style={{backgroundColor: bRight}} className="box"></div>
                </div>
            </div>
            
        )
    }
}

export default Boxes;