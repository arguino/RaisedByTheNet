import React, {Component} from 'react';
import Images from './PhotographyProject'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

const albums = [
    '2017-fall-montreal',
    '2017-summer-beauce',
    '2017-summer-montreal'
];

const album_names = [
    'Montreal, Fall 2017',
    'Beauce, Summer 2017',
    'Montreal, Summer 2017',
];


class Photography extends Component {
    state = {albums: []};

    getAlbums = () => {
        let promises = albums.map(queryParam => fetch(this.createFetchUrl(queryParam)).then(res => res.json()));
        Promise.all(promises).then(albums => {
            this.setState({albums});
        })
    };

    createFetchUrl = (album_name) => {
        return '/flickr/' + album_name;
    };

    componentDidMount() {
        this.getAlbums();
    }

    render() {
        const {albums} = this.state;
        var photographyProjects = albums.length > 0 ? <PhotographyProjects albums={albums}/> : null;

        return (
            < Router>
                {photographyProjects}
            </Router>
        );
    }
}

function PhotographyProjects(props) {
    return props.albums.map((images, index) =>
        (
            < div key={index}>
                <Route exact={true} path="/photography" render={() => (
                    <div>
                        <PhotographyProjectBoxList index={index} images={images[0]} link={'/photography/' + index}/>
                    </div>
                )}/>
                <Route exact={true} path={"/photography/" + index} render={() => (
                    <div>
                        <Images images={images}/>
                    </div>
                )}/>
                <br/>
            </div>
        ));
}

function PhotographyProjectBoxList(props) {

    return <div>
        <PhotographyProjectBox name={album_names[props.index]} link={props.link} image={props.images}
                               alt={props.images}> </PhotographyProjectBox>
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
                            <img src={props.image} className="w-100" style={previewImageStyle} alt={props.image}/>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    </div>);
}

const photographyBoxTitleStyle = {
    margin: 'auto',
    textAlign: 'center',
};

const cardStyle = {
    backgroundColor: '#303030',
    borderStyle: 'none',
    maxHeight: '50vh',
    overflow: 'hidden',
};

const previewImageStyle = {}

export default Photography;
