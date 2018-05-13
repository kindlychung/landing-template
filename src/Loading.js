import React, { Component } from 'react';
import ReactLoading from 'react-loading';

class Loading extends Component {
	render() {
		return (
			<ReactLoading type={'bubbles'} color="#000"/>
		)
	}
}

export default Loading;