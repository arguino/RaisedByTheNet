import React, {Component} from 'react';
import './App.css';
import Header from './components/layout/Header'
import Index from './components/pages/Index'
import Photography from './components/pages/Photography';
import Projects from './components/pages/Projects';
import About from './components/pages/About';
import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Header/>
                    <Route exact={true} path="/" component={Index}/>
                    <Route exact={true} path="/photography/" component={Photography}/>
                    <Route exact={true} path="/projects/" component={Projects}/>
                    <Route exact={true} path="/about/" component={About}/>
                </div>
            </Router>
        );
    }
}

export default App;
