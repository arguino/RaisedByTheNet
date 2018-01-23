import React, {Component} from 'react';

class PhotographyProject extends Component {
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
            <div className="App">
                <Images images={images}/>
            </div>
        );
    }
}

function Images(props) {
    return props.images.map((image) =>
        (
            <div>
                <img key={image} src={image} style={imageStyle} alt="ImSoSorry"/>
                <br/>
            </div>
        ));
}

const imageStyle = {
    display: 'block',
    margin: 'auto',
    width: '80vw',
    minWidth: '80vw',
    maxHeight: '100vh',
};

export default PhotographyProject;
