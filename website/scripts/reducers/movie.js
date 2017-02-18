import * as requestConstant from '../constants/RequestConstant';

const initState = {
	items: {
		total: 1,
		movies: [],
	},
	isFetching: false,
	viewing: {
		company: {},
		created: 0,
		updated: 0,
		categories: [],
		sub_category: {}
	},
	years: [],
	categories: [],
	hots: {
		total: 1,
		movies: []
	},
	promotions: {
		total: 1,
		movies: []
	},
	bannerMovies: {
		total: 1,
		movies: []
	},
	comments: [],
	hotComments: [],
	lastComment: {

	},
	relatedMovies: {
		total: 1,
		movies: []
	},
	lastMovies: {
		total: 1,
		movies: []
	},
};

export default function movie(state = initState, action) {
	switch (action.type) {
		case requestConstant.REQUEST_MOVIE:
			try {
				action.movie.download_links = JSON.parse(action.movie.download_links);
			}
			catch (e) {
				console.log("解析下载链接失败");
			}
			return Object.assign({}, state, {
				viewing: action.movie
			});

		case requestConstant.REQUEST_MOVIES:
			return Object.assign({}, state, {
				items: {
					total: action.total,
					movies: action.list
				}
			});

		case requestConstant.REQUEST_MOVIE_YEARS:
			return Object.assign({}, state, {
				years: action.years
			});

		case requestConstant.REQUEST_MOVIE_CATEGORIES:
			return Object.assign({}, state, {
				categories: action.categories
			})

		case requestConstant.REQUEST_MOVIE_BANNER:
			return Object.assign({}, state, {
				bannerMovies: {
					total: action.bannerMovies.total,
					movies: action.bannerMovies.list
				}
			});

		case requestConstant.REQUEST_MOVIE_HOT:
			return Object.assign({}, state, {
				hots: {
					total: action.hots.total,
					movies: action.hots.list
				},
			});
		case requestConstant.REQUEST_MOVIE_PROMOTION:
			return Object.assign({}, state, {
				promotions: {
					total: action.promotions.total,
					movies: action.promotions.list
				}
			});

		case requestConstant.POST_NEW_MOVIE_COMMENT:
			let comments = state.comments.slice(0);
			comments.unshift(action.comment); 
			return Object.assign({}, state, {
				lastComment: action.comment,
				comments: comments 
			});

		case requestConstant.REQUEST_MOVIE_HOT_COMMENTS:
			return Object.assign({}, state, {
				hotComments: action.hotComments 
			});

		case requestConstant.REQUEST_MOVIE_COMMENTS:
			return Object.assign({}, state, {
				comments: action.comments
			});

		case requestConstant.REQUEST_RELATED_MOVIES:
			return Object.assign({}, state, {
				relatedMovies: {
					movies: action.relatedMovies.list,
					total: action.relatedMovies.total
				}
			});

		case requestConstant.REQUEST_LAST_MOVIES:
			return Object.assign({}, state, {
				lastMovies: {
					total: action.movies.total,
					movies: action.movies.list
				}
			});
	}


	return state;
}
