import React, {Component} from 'react';
import PropTypes from 'prop-types';

class App extends Component {
	render() {
		return (
			<div className="">
				<h2>Hello Wrold</h2>
			</div>
		);
	}
}

App.propTypes = {
	prop: PropTypes.array.isRequired
};

export default App;