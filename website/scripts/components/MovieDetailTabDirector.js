import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class MovieDetailTabDirector extends Component {
	render() {
		return (
			<div ref="download" className="sbox fixidtab">
                <div className="topic-content">
                	<p>资料收集中 马上上线</p>
                </div>
            </div>
		);
	}
}

const propTypes = {
	movie: PropTypes.object.isRequired
};
MovieDetailTabDirector.propTypes = propTypes;

export default MovieDetailTabDirector