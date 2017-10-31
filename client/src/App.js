import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    state = {passwords: []};
    getPasswords = () => {
        fetch('/flickr')
            .then(res => res.json)
            .then(passwords => this.setState({passwords}));
    }

    componentDidMount() {
        this.getPasswords();
    }

    render() {
        const { passwords } = this.state;

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <img src={passwords[0]} alt="logocriss"/>
                    <h1> {passwords[0]} ok</h1>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                    <button
                        className="more"
                        onClick={this.getPasswords}>
                        Get More
                    </button>
                </p>
            </div>
        );
    }
}

export default App;
