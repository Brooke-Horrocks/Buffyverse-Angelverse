import React, {createContext, Component} from 'react';

export const HeaderContext = createContext();

export default class HeaderData extends Component {
    constructor(){
        super();
        this.state = {
            show: "buffy"
        }
        this.toggleShow = this.toggleShow.bind(this);
    }

    toggleShow(){
        this.setState(prevState => ({
            show: prevState.show === "buffy" ? "angel" : "buffy"
        }))
    }

    render() {
        const props = {
            toggleShow: this.toggleShow,
            ...this.state
        }

        return (
            <HeaderContext.Provider value={props}>
                {this.props.children}
            </HeaderContext.Provider>
        )
    }
}

export const withHeaderContext = Comp => props => (
    <HeaderContext.Consumer>
        {value => <Comp {...value}{...props}/>}
    </HeaderContext.Consumer>
)