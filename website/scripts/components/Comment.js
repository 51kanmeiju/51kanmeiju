import React, {PropTypes, Component} from 'react';
import {toDateString} from '../utils/TimeUtils';

class Comment extends Component {
	render() {
		const {comment, className} = this.props;
		return (
			<div className={'comment '+  className}>
				<p>{comment.comment}</p>
				<p className="author">{toDateString(comment.created)} - by@{comment.nickname}</p>
			</div>
		);
	}
}

const propTypes = {
	comment: PropTypes.object.isRequired,
	className: PropTypes.string.isRequired
};
Comment.PropTypes = propTypes;

export default Comment