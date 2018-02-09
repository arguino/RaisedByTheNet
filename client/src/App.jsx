import React, {Component} from 'react';
import {Navbar, Collapse, Nav, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap'
import './App.css';
import Header from './components/layout/Header'
import Index from './components/pages/Index'
import Photography from './components/pages/Photography';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Header />
                    <Route exact={true} path="/" component={Index} />
                    <Route exact={true} path="/photography/" component={Photography} />
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

const headerStyle = {
    backgroundColor: '#303030',
    margin: 'auto',
    marginTop: '1%',
    color: 'white',
    maxWidth: '80rem',
    minWidth: '80vw',
};

const titleStyle = {
    paddingTop: '1vh',
    width: '100%',
    fontSize: '3vh',
    textAlign: 'center',
};

const rowsDivStyle = {
    marginBottom: '1vh',
};

const rowStyle = {
    display: 'inline-block',
    marginLeft: '.5vw',
    fontSize: '1.4vh',
};

const contentStyle = {
    display: 'block',
    margin: 'auto',
    width: '80vw',
    minWidth: '80vw',
    maxHeight: '100vh',
};

export default App;
