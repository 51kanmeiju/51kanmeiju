import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {toDateString} from '../utils/TimeUtils';

class MovieDetailTabComments extends Component {

	render() {
		const {hotComments} = this.props.movieState;
		let comments = hotComments.map(comment => {
			return <li key={comment.id}>
				<p>{comment.comment}</p>
				<p className="clearfix">
					<span className="time">{toDateString(comment.created)}</span>
					<span className="author">{comment.nickname}</span>
				</p>
			</li>
		});
		return (
			<div ref="comment" className="movie-comments sbox fixidtab">
                <h2>热门评论</h2>
                <div className="items">
                	<ul>
                		{comments}
                	</ul>
                </div>
            </div>
		);
	}
}

const propTypes = {
	movie: PropTypes.object.isRequired,
	movieState: PropTypes.object.isRequired
};
MovieDetailTabComments.propTypes = propTypes;

export default MovieDetailTabComments;