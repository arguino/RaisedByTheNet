import React, {Component} from 'react';
import {Navbar, Collapse, Nav, NavbarBrand, NavbarToggler, NavItem} from 'reactstrap'
import {Link} from 'react-router-dom'

class Header extends Component {
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
            <div style={rowsDivStyle}>
                <header>
                    <Navbar color="faded" light expand="md">
                        <Title/>
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <MenuItem name="Home" link="/"></MenuItem>
                                <MenuItem name="Photography" link="/photography"></MenuItem>
                                <MenuItem name="Projects" link="/projects"></MenuItem>
                                <MenuItem name="About" link="/about"></MenuItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                    <br/>
                </header>
            </div>
        );
    }
}

function MenuItem(props) {
    return (
        <div style={rowStyle}>
            <NavItem>
                <Link to={props.link}>
                    <h2> {props.name}</h2>
                </Link>
            </NavItem>
        </div>
    );
}


function Title() {
    return (
        <NavbarBrand>
            <h1 className="App-title" style={titleStyle}>Raised by the Net</h1>
        </NavbarBrand>
    );
}

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

export default Header;