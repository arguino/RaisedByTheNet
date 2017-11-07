import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

function Images(props){
    return props.images.map((image) =>
        <li key ={image}>
            <img src={ image } alt="notmuchbaby"/>
        </li>
    );
}

class OldApp extends Component {
    state = {images: []};

    getPasswords = () => {
        fetch('/flickr')
            .then(res => res.json())
            .then(images => this.setState({ images }))
        .then(console.log(this.state));
    }

    componentDidMount() {
        this.getPasswords();
    }

    render() {
        const { images } = this.state;

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <Clock />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <body>
                     <Images images={images} />
                </body>
            </div>
        );
    }
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default OldApp;
