import React, {Component} from 'react';

class Index extends Component {
	render () {
		return (
			<img
			src="https://pro2-bar-s3-cdn-cf6.myportfolio.com/c46230f62bacd9eaae374a893fe2aa23/0934ead2-b5cc-443a-88b5-ff3d9d707256_rw_1920.jpg?h=107d1864016d079ab423ab5408b58cb7"
			style={contentStyle} alt='indexPhoto'/>
			);
	}
}

const contentStyle = {
    display: 'block',
    margin: 'auto',
    width: '80vw',
    minWidth: '80vw',
    maxHeight: '100vh',
};

export default Index;