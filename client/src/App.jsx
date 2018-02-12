import React, {Component} from 'react';
import './App.css';
import Header from './components/layout/Header'
import Index from './components/pages/Index'
import Photography from './components/pages/Photography';
import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Header/>
                    <Route exact={true} path="/" component={Index}/>
                    <Route exact={true} path="/photography/" component={Photography}/>
                    <Route exact={true} path="/projects/" render={() => (
                        <div>
                            <a href="https://www.ozymandias.io">Link to a non existant website</a>
                        </div>
                    )}/>
                    <Route exact={true} path="/about/" render={() => (
                        <div>
                            <p> will be completed one day like the rest of this site. </p>
                        </div>
                    )}/>
                </div>
            </Router>
        );
    }
}

export default App;
