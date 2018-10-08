import React, { Component } from 'react';

export default class Timer extends Component {
    constructor(){
        super();
        this.state = {
            elapsedTime: 0,
            playing: true
        }
        this.tick = this.tick.bind(this);
        this.pause = this.playPause.bind(this);
        this.interval = null;
    }

    tick(){
        this.setState(prevState => ({
            elapsedTime: prevState.elapsedTime + 1
        }))
    }
    playPause(){
        if(this.interval){
            this.interval = clearInterval(this.interval);
        }else{
            this.interval = setInterval(this.tick, 1000);
        }
        
    }

    componentDidMount(){
        this.interval = setInterval(this.tick, 1000);
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render(){
        const { elapsedTime } = this.state;
        return(
            <div>
                Time Elapsed: <span>{elapsedTime}</span>
                <br/>
                <button onClick={this.pause}>Play/Pause</button>
            </div>
        )
    }
}
