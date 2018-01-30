import React, {Component} from 'react';
import Images from './PhotographyProject'
import './App.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

class Photography extends Component {
    state = {images: []};

    getImages = () => {
        fetch('/flickr')
            .then(res => res.json())
            .then(images => this.setState({images}))
            .then(console.log(this.state));
    };

    componentDidMount() {
        this.getImages();
    }

    render() {
        const {images} = this.state;
        return (
            < Router>
                < div className="App">
                    <Route exact="true" path="/photography" render={() => (
                        <div>
                            <PhotographyProjectBoxList images={images[0]}/>
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

function PhotographyProjectBoxList(props) {
    const photographyProjectBoxes = (
        <div>
            <PhotographyProjectBox name="Autumn" link="/photography/1" image={props.images}> </PhotographyProjectBox>
        </div>
    );

    return <div>
        {photographyProjectBoxes}
    </div>
}

function PhotographyProjectBox(props) {
    return (<div>
        <Link style={photographyBoxStyle} to={props.link}>
            <h2 style={photographyBoxTitle}> {props.name}</h2>
            <img key={props.image} src={props.image} alt="ProjectPicturePreview" style={photographyBoxImagePreview}/>
        </Link>
    </div>);
}

const photographyBoxStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',

    margin: 'auto',
    marginTop: '.5vh',
    marginBottom: '5vh',
    width: '80vw',
    minWidth: '80vw',
    // height: '12vh',

    fontSize: '.9rem',
    backgroundColor: '#303030',
};

const photographyBoxTitle = {
    margin: 'auto',
};

const photographyBoxImagePreview = {
    margin: 'auto',
    maxWidth: '100%',
    maxHeight: '100%',
};

export default Photography;
