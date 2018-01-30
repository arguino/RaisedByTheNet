import React, {Component} from 'react';
import {Navbar, Collapse, Nav, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap'
import './App.css';
import Photography from './Photography.js';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

class App extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <MenuHeader toggle={this.toggle} isOpen={this.state.isOpen}/>
                    <Route exact="true" path="/" render={() => (
                        <img
                            src="https://pro2-bar-s3-cdn-cf6.myportfolio.com/c46230f62bacd9eaae374a893fe2aa23/0934ead2-b5cc-443a-88b5-ff3d9d707256_rw_1920.jpg?h=107d1864016d079ab423ab5408b58cb7"
                            style={contentStyle} alt='indexPhoto'/>
                    )}/>

                    <Route exact="true" path="/photography/" render={() => (
                        <div>
                            <Photography/>
                        </div>
                    )}/>
                    <Route exact="true" path="/projects/" render={() => (
                        <div>
                            <a href="https://www.ozymandias.io">waddup</a>
                        </div>
                    )}/>
                </div>
            </Router>
        );
    }
}

function MenuHeader(props) {
    const tiles = (
        <header>
            <Navbar color="faded" light expand="md">
                <NavbarBrand href="/">
                    <h1 className="App-title" style={titleStyle}>Raised by the Net</h1>
                </NavbarBrand>
                <NavbarToggler onClick={props.toggle}/>
                <Collapse isOpen={props.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <MenuItemDesktop name="Photography" link="/photography"></MenuItemDesktop>
                        <MenuItemDesktop name="Projects" link="/projects"></MenuItemDesktop>
                        <MenuItemDesktop name="About" link="/about"></MenuItemDesktop>
                        <MenuItemDesktop name="Home" link="/"></MenuItemDesktop>
                    </Nav>
                </Collapse>
            </Navbar>
            <br/>
        </header>

    );

    return <div style={rowsDivStyle}>
        {tiles}
    </div>
}

function MenuItemDesktop(props) {
    return (<div style={rowStyle}>
        <NavItem>
            <Link to={props.link}>
                <h2> {props.name}</h2>
            </Link>
        </NavItem>
    </div>)
        ;
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
