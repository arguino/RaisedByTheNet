import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
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
                    {this.state.images.map((image) =>
                        <li>
                            <img src={ image } />
                        </li>
                    )}
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
