import React, {Component, PropTypes} from 'react';

import {postComment, loadMovieComments} from '../actions/CommentActions';
import Comment from './Comment.js';

class CommentBox extends Component {

	constructor(props) {
		super(props)
		this.submitComment = this.submitComment.bind(this);
		this.handleEnterDown = this.handleEnterDown.bind(this);
	}

	submitComment() {
		let cmtStr = this.refs.comment.value;
		if (cmtStr.trim().length <= 0) return;
		const {dispatch, movie} = this.props;
		dispatch(postComment(cmtStr, movie.id));
		dispatch(loadMovieComments(movie.id));
		this.refs.comment.value = '';
	}

	handleEnterDown(event) {
		// enter down
		if (event.which == 13) {
			event.preventDefault();
			this.submitComment();
		}
	}

	render() {
		const {movieState} = this.props;
		let comments = movieState.comments;
		if (!comments) {
			comments = [];
		}
		let renderComments = comments.map( (comment, index) => {
			let clsNames = index % 2 == 0? 'left': 'right';
			return <Comment comment={comment} className={clsNames}  key={comment.id}/>
		});
		return (
			<div className="commentbox">
				<div className="comments-wrap">
					<div className="comments">
						{renderComments}
					</div>
				</div>
				<textarea onKeyDown={ (event) => { this.handleEnterDown(event)} }  ref="comment" placeholder="我要吐槽" />
				<button onClick={this.submitComment} className="button btn-blue btn-normal btn-full-width">吐槽</button>
			</div>
		);
	}
}

const propTypes = {
	dispatch: PropTypes.func.isRequired,
	movie: PropTypes.object.isRequired,
	movieState: PropTypes.object.isRequired
};
CommentBox.propTypes = propTypes;

export default CommentBox