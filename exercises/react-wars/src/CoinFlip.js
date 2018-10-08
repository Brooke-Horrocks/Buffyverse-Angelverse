import React, { Component } from 'react'

export default class CoinFlip extends Component{
    constructor(){
        super();
        this.state = {
            isFlipping: true,
            result: undefined
        }
        this.flipCoin = this.flipCoin.bind(this);
        this.handleResult = this.handleResult.bind(this);
        this.manuallyFlip = this.manuallyFlip.bind(this);
    }

    handleResult(){
        this.flipCoin()
            .then(result => this.setState({isFlipping: false, result}))
            .catch(result => this.setState({isFlipping: false, result}))
    }
    flipCoin(){
        return new Promise((res, rej)=>{
            setTimeout(()=>{
                Math.random() < .5 ? res(true) : rej(false);
            }, 2000)
        })
    }
    manuallyFlip(){
        this.setState({isFlipping: true, result: undefined}, () => this.handleResult());
    }

    componentDidMount(){
        this.handleResult();
    }

    render(){
        const { isFlipping, result } = this.state;
        return(
            <div>
                {isFlipping ? 
                    <p>...Call it in the air!</p>
                    : 
                    <p>The result is {result ? "HEADS!" : "TAILS!"}</p>
                }
                <button onClick={this.manuallyFlip}>Flip!</button>
            </div>

        )
    }
}