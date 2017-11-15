import React, {Component} from 'react';
import MediaQuery from 'react-responsive';
import Images from './OldApp'
import './App.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

class newApp extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <header className="App-header" style={headerStyle}>
                        <h1 className="App-title" style={titleStyle}>Raised by the Net</h1>
                        <MenuHeader/>
                    </header>
                    <br/>
                    <Route exact="true" path="/" render={() => (
                        <img
                            src="https://pro2-bar-s3-cdn-cf6.myportfolio.com/c46230f62bacd9eaae374a893fe2aa23/0934ead2-b5cc-443a-88b5-ff3d9d707256_rw_1920.jpg?h=107d1864016d079ab423ab5408b58cb7"
                            style={contentStyle} alt='indexPhoto'/>
                    )}/>

                    <Route exact="true" path="/photography" render={() => (
                        <div>
                            <Images/>
                        </div>
                    )}/>
                    <Route exact="true" path="/projects" render={() => (
                        <div>
                            <a href="https://www.ozymandias.io">waddup</a>
                        </div>
                    )}/>
                </div>
            </Router>
        )
            ;
    }
}

function MenuHeader() {
    const tiles = (
        <MediaQuery query="(min-width: 0rem)">
            <MenuItemDesktop name="Home" link="/"></MenuItemDesktop>
            <MenuItemDesktop name="Photography" link="/photography"></MenuItemDesktop>
            <MenuItemDesktop name="Projects" link="/projects"></MenuItemDesktop>
            <MenuItemDesktop name="About" link="/about"></MenuItemDesktop>
        </MediaQuery>
    );

    return <div style={rowsDivStyle}>
        {tiles}
    </div>
}

function MenuItemDesktop(props) {
    return (<div style={rowStyle}>
        <Link to={props.link}>
            <h2> {props.name}</h2>
        </Link>
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
}

const titleStyle = {
    paddingTop: '1vh',
    width: '100%',
    fontSize: '5vh',
    textAlign: 'center',
}
const rowsDivStyle = {
    marginBottom: '1vh',
}

const rowStyle = {
    display: 'inline-block',
    marginLeft: '.5vw',
    fontSize: '2vh',
}

const contentStyle = {
    display: 'block',
    margin: 'auto',
    width: '80vw',
    minWidth: '80vw',
    maxHeight: '100vh',
}

export default newApp;
