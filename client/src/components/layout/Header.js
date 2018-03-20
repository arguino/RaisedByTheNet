import React, {Component} from 'react';
import {Navbar, Collapse, Nav, NavbarBrand, NavbarToggler, NavItem} from 'reactstrap'
import {Link} from 'react-router-dom'
import './Header.css';

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
            <div>
                <header>
                    <Navbar color="faded" light expand="md">
                        <NavbarBrand>
                             <h1 className="title">RORSCHARG</h1>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <MenuItem name="Home" link="/"></MenuItem>
                                <MenuItem name="Photography" link="/photography"></MenuItem>
                                <MenuItem name="Projects" link="/projects"></MenuItem>
                                <MenuItemBlog name="Blog" link="http://blog.rorscharg.com"> </MenuItemBlog>
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
        <div className="menu-item-container">
            <NavItem>
                <Link to={props.link}>
                    <h2> {props.name}</h2>
                </Link>
            </NavItem>
        </div>
    );
}

function MenuItemBlog(props) {
    return (
        <div className="menu-item-container">
            <NavItem>
                <a href={props.link}>
                    <h2> {props.name}</h2>
                </a>
            </NavItem>
        </div>
    );
}

export default Header;