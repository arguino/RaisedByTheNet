import React, {Component} from 'react';

class PhotographyProject extends Component {
    render() {
        return (
            <div className="App">
                <Images images={this.props.images}/>
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
    maxWidth: '80vw',
    maxHeight: '100vh',
};

export default PhotographyProject;
