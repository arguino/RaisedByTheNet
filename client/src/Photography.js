import React, {Component} from 'react';
import MediaQuery from 'react-responsive';
import Images from './OldApp'
import './App.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

class Photography extends Component {
    render() {
        return (
            < Router>
                < div className="App">
                    <Route exact="true" path="/photography" render={() => (
                        <div>
                            <PhotographyProjectBoxList/>
                        </div>
                    )}/>
                    <Route exact="true" path="/photography/1" render={() => (
                        <div>
                            <Images/>
                        </div>
                    )}/>
                </div>
            </Router>
        );
    }
}

function PhotographyProjectBoxList() {
    const photographyProjectBoxes = (
        <div>
            <PhotographyProjectBox name="Autumn" link="/photography/1"></PhotographyProjectBox>
            <PhotographyProjectBox name="Autumn" link="/photography/1"></PhotographyProjectBox>
        </div>
    );

    return <div>
        {photographyProjectBoxes}
    </div>
}

function PhotographyProjectBox(props) {
    return (<div style={photographyBoxStyle}>
        <Link to={props.link}>
            <h2> {props.name}</h2>
        </Link>
    </div>)
        ;
}

const photographyBoxStyle = {
    display: 'block',
    margin: 'auto',
    marginTop: '.5vh',
    width: '80vw',
    minWidth: '80vw',
    height: '12vh',
    fontSize: '.9rem',
    backgroundColor: '#303030',
}

const photographyBoxTitle = {

}

const photographyBoxImagePreview = {

}
export default Photography;
