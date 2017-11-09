import React, {Component} from 'react';
import MediaQuery from 'react-responsive';
import './App.css';

class newApp extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header" style={headerStyle}>
                    <h1 className="App-title" style={titleStyle}>Raised by the Net</h1>
                    <MenuHeader/>
                </header>
                <br/>
                <img
                    src="https://pro2-bar-s3-cdn-cf6.myportfolio.com/c46230f62bacd9eaae374a893fe2aa23/0934ead2-b5cc-443a-88b5-ff3d9d707256_rw_1920.jpg?h=107d1864016d079ab423ab5408b58cb7"
                    style={imageStyle} alt='indexPhoto' margin='auto'/>
            </div>
        );
    }
}

function MenuHeader() {
    const tiles = (
        <MediaQuery query="(min-width: 0rem)">
                <MenuItemDesktop name="Home" link="/index.html"></MenuItemDesktop>
                <MenuItemDesktop name="Photography" link="/photography.html"></MenuItemDesktop>
                <MenuItemDesktop name="Projects" link="/projects.html"></MenuItemDesktop>
                <MenuItemDesktop name="About" link="/about.html"></MenuItemDesktop>
        </MediaQuery>
    );

    return <div className="App-subsections-titles" display="inline-block">
        {tiles}
    </div>
}

function MenuItemDesktop(props) {
    return (<div style={rowStyle}>
        <a style={rowStyle} href={props.link}>
            <h2> {props.name}</h2>
        </a>
    </div>)
        ;
}

const headerStyle = {
    backgroundColor: '#303030',
    height: '15vh',
    paddingTop: '1vh',
    paddingBottom: '3vh',
    margin: 'auto',
    marginTop: '2vh',
    color: 'white',
    fontSize: '1.20rem',
    width: '100vw',
    maxWidth: '80rem',
    minWidth: '80vw'
}

const titleStyle = {
    fontSize: '5vh',
    textAlign: 'center',
}

const rowStyle = {
    display: 'inline-block',
    marginLeft: '.5vw'
}

const imageStyle = {
    width: '80vw',
    minWidth: '80vw',
    maxHeight: '100vh',
    display: 'block',
    margin: 'auto',
}
export default newApp;
