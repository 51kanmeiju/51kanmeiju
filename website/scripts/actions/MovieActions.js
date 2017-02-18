import * as urlUtils from '../utils/URLUtils';
import * as requestConstant from '../constants/RequestConstant';
import fetch from 'isomorphic-fetch';

export function loadMovies(page = 1, limit = 10) {
	return {};
}

export function loadMovie(id) {
	return dispatch => {
		fetch(urlUtils.constructMovieUrl(id))
		.then(response => response.json())
		.then(json => {
			dispatch({
				type: requestConstant.REQUEST_MOVIE,
				movie: json.data
			});
			dispatch({
				type: requestConstant.SEARCH_KEYWORD_CHANGED,
				keyword: ''
			});
		})
		.catch(err => {throw err ;})
	}
}

export function initMovieYearsAndCategories() {
	return dispatch => {
		dispatch(loadYears());
		dispatch(loadCategories());
	};
}

export function initHomeMovies() {
	return dispatch => {
		dispatch(loadHomeBannerMovies())
		dispatch(loadHotMovies())
		dispatch(loadHomePromotionMovies())
	}
}

export function loadHotMovies(page = 1, limit= 20) {
	return dispatch =>  {
		fetch(urlUtils.constructHotMovieUrl(limit, page))
		.then(response => response.json())
		.then(json => {
			dispatch({
				type: requestConstant.REQUEST_MOVIE_HOT,
				hots: json.data
			})
		})
	}
}

export function loadHomePromotionMovies() {
	return dispatch => {
		fetch(urlUtils.constructPromotionMovieUrl())
		.then(response => response.json())
		.then(json => {
			dispatch({
				type: requestConstant.REQUEST_MOVIE_PROMOTION,
				promotions: json.data
			});
		})
	}
}

export function loadHomeBannerMovies() {
	return dispatch => {
		fetch(urlUtils.constructHomeBannerMovieUrl())
		.then(response => response.json())
		.then(json =>  {
			dispatch({
				type: requestConstant.REQUEST_MOVIE_BANNER,
				bannerMovies: json['data']
			})
		})
		.catch(err => {throw err;})
	}
}

export function loadLastMovies(page = 1, limit = 20) {
	return dispatch => {
		fetch(urlUtils.constructLastMoviesUrl(limit, page))
		.then(res => res.json())
		.then(json => {
			dispatch({
				type: requestConstant.REQUEST_LAST_MOVIES,
				movies: json.data
			});
		});
	};
}

export function loadYears() {
	return dispatch =>  {
		fetch(urlUtils.constructYearUrl())
		.then(response => response.json())
		.then(json => {
			dispatch({
				type: requestConstant.REQUEST_MOVIE_YEARS,
				years: json['data']
			});
		})
		.catch(err => {throw err;});
	};
}

export function loadCategories() {
	return dispatch => {
		fetch(urlUtils.constructCategoryUrl())
		.then(response => response.json())
		.then(json => {
			dispatch({
				type: requestConstant.REQUEST_MOVIE_CATEGORIES,
				categories: json['data']
			});
		})
		.catch(err => {throw err; })
	}
}

export function loadRelatedMovies(mid, limit = 10, page = 1) {
	return dispatch => {
		fetch(urlUtils.constructRelatedMovieUrl(mid, limit, page))
		.then(res => res.json())
		.then(json => {
			dispatch({
				type: requestConstant.REQUEST_RELATED_MOVIES,
				relatedMovies: json.data
			});
		});
	};
}

export function loadYearMovies(year, page = 1, limit = 20) {
	return dispatch => {
		fetch(urlUtils.constructYearMovieUrl(year, limit, page))
		.then(res => res.json())
		.then(json => {
			dispatch({
				type: requestConstant.REQUEST_MOVIES_IN_YEAR,
				year: year,
				movies: json.data
			});
		});
	};
}

export function loadMoviesInCategory(id, page = 1, limit = 20) {
	return dispatch => {
		fetch(urlUtils.constructCategoryMoviesUrl(id, limit, page))
		.then(res => res.json())
		.then(json => {
			dispatch({
				type: requestConstant.REQUEST_CATEGORY_MOVIES,
				movies: json.data
			});
		});
	};
}








