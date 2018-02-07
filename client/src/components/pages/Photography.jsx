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
            <PhotographyProjectBox name="Autumn" link="/photography/1" image={props.images}> </PhotographyProjectBox>
    </div>
}

function PhotographyProjectBox(props) {
    return (<div>
        <section>
        <div className="container py-3">
        <div className="card">
        <div className="row ">
        <div className="col-md-4">
        <img src={props.image} className="w-100" />
        </div>
        <div className="col-md-8 px-3">
        <div className="card-block px-3">
        <h4 className="card-title">Lorem ipsum dolor sit amet</h4>
        <p className="card-text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        <p className="card-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <a href="#" className="btn btn-primary">Read More</a>
        </div>
        </div>

        </div>
        </div>
        </div>
        </section>
        <Card>
            <CardImg top width="50%" style={photographyBoxImagePreview} src={props.image} alt="Card image cap" />
            <CardBody>
                <CardTitle>{props.name}</CardTitle>
            </CardBody>
        </Card>
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

    fontSize: '.9rem',
    backgroundColor: '#303030',
};

const photographyBoxTitle = {
    margin: 'auto',
};

const photographyBoxImagePreview = {
    margin: 'auto',
    maxWidth: '50vw',
    maxHeight: '100%',
};

export default Photography;
