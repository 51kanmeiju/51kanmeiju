import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class MovieDetailTabInfo extends Component {
	render() {
		const {movie} = this.props;
		return (
			<div className="sbox fixidtab">
                <h2>{movie.name}</h2>
                <div className="topic-content">
                    <p>{movie.content}</p>
                </div>
            </div>
		);
	}
}

const propTypes = {
	movie: PropTypes.object.isRequired
};
MovieDetailTabInfo.propTypes = propTypes;

export default MovieDetailTabInfo;