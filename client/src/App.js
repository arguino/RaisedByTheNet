import React, {Component} from 'react';
import './App.css';

class newApp extends Component {
    constructor() {
        super();
        this.state = {
            width: window.innerWidth
        };
    }

    render() {
        const {width} = this.state;
        const isMobile = width <= 500;

        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Raised by the Net</h1>
                    <MenuHeader isMobile={isMobile}/>
                </header>

            </div>
        );
    }
}

function MenuHeader(props) {
    let tiles;
    if (!props.isMobile) {
        tiles = (
            <div>
                <MenuItemDesktop name="Home" link="/index.html"></MenuItemDesktop>
                <MenuItemDesktop name="Photography Project" link="/index.html"></MenuItemDesktop>
                <MenuItemDesktop name="Leave" link="/index.html"></MenuItemDesktop>
            </div>
        );
    }
    return <div className="App-subsections-titles">
        {tiles}
    </div>
}

function MenuItemDesktop(props) {
    return (<div style={rowStyle}>
        <a style={rowStyle} href={props.link}>
            <h2> {props.name}</h2>
    </a>
</div>)
    ;
}

const rowStyle = {
    display: 'inline-block',
    "margin-left": '1em'
}

export default newApp;
