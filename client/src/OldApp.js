import React, {Component} from 'react';

class OldApp extends Component {
    state = {images: []};

    getPasswords = () => {
        fetch('/flickr')
            .then(res => res.json())
            .then(images => this.setState({images}))
            .then(console.log(this.state));
    }

    componentDidMount() {
        this.getPasswords();
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
                <img key={image} src={image} style={imageStyle} alt="notmuchbaby"/>
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
}

export default OldApp;
