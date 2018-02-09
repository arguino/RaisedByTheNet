import React, {Component} from 'react';
import Images from './PhotographyProject'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';


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
                            <Images images={images}/>
                        </div>
                    )}/>
                </div>
            </Router>
        );
    }
}

function PhotographyProjectBoxList(props) {

    return <div>
            <PhotographyProjectBox name="Montreal - Summer 2017" link="/photography/1" image={props.images}> </PhotographyProjectBox>
    </div>
}

function PhotographyProjectBox(props) {
    return (<div>
        <Link to={props.link}>
        <div className="container">
        <div className="card" style={cardStyle}>
        <div className="row ">
        <div className="col-md-4" style={photographyBoxTitleStyle}>
        <h4 className="card-title">{props.name}</h4>
        </div>
        <div className="col-md-8">
        <img src={props.image} className="w-100" />
        </div>
        </div>
        </div>
        </div>
        </Link>
    </div>);
}

const photographyBoxStyle = {
    display: 'grid',
    justifyContent: 'space-around',
    flexDirection: 'row',

    margin: 'auto',
    marginTop: '.5vh',
    marginBottom: '5vh',
    width: '80vw',
    minWidth: '80vw',

    fontSize: '.9rem',
    backgroundColor: '#303030',
};

const photographyBoxTitleStyle = {
    margin: 'auto',
    textAlign: 'center',
};

const photographyBoxImagePreview = {
    margin: 'auto',
    maxWidth: '50vw',
    maxHeight: '100%',
};

const cardStyle = {
    backgroundColor: '#303030',
    borderStyle: 'none',
};

export default Photography;
