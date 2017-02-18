import * as URLUtil from '../utils/URLUtils';
import * as requestConstant from '../constants/RequestConstant';

export function postComment(cmtStr, mid) {
	return dispatch => {
		let form = new FormData();
		form.append('mid', mid)
		form.append('comment', cmtStr)
		fetch(URLUtil.constructPostCommentUrl(), {
			method: 'POST',
			body: form,
		})
		.then(res => res.json())
		.then(json => {
			dispatch({
				type: requestConstant.POST_NEW_MOVIE_COMMENT,
				comment: json['data']
			});
		});
	};
}

export function loadMovieComments(mid, page = 1, limit = 10 ) {
	return dispatch => {
		fetch(URLUtil.constructMovieCommentsUrl(mid, page, limit))
		.then(res => res.json())
		.then(json => {
			dispatch({
				type: requestConstant.REQUEST_MOVIE_COMMENTS,
				comments: json['data']
			});
		});
	};
}

export function loadMovieHotComments(mid, page = 1, limit = 10) {
	return dispatch => {
		fetch(URLUtil.constructMovieHotCommentsUrl(mid, page, limit))
		.then(res => res.json())
		.then(json => {
			dispatch({
				type: requestConstant.REQUEST_MOVIE_HOT_COMMENTS,
				hotComments: json['data']
			});
		});
	}
}