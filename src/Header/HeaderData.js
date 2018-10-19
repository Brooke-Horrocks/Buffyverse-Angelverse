import React, {createContext, Component} from 'react';

export const HeaderContext = createContext();

export default class HeaderData extends Component {
    constructor(){
        super();
        this.state = {
            show: "buffy",
            currentPage: "home"
        }
        this.toggleShow = this.toggleShow.bind(this);
        this.togglePage = this.togglePage.bind(this);
    }

    toggleShow(){
        this.setState(prevState => ({
            show: prevState.show === "buffy" ? "angel" : "buffy"
        }))
    }
    togglePage(page){
        this.setState({
            currentPage: page
        })
    }

    render() {
        const props = {
            toggleShow: this.toggleShow,
            togglePage: this.togglePage,
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