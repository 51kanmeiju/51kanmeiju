const domain = 'http://51kanmeiju.com';

export function constructYearUrl() {
	return `${domain}/api/movieyears`;
}

export function constructCategoryUrl() {
	return `${domain}/api/category`;
}

export function constructMovieUrl(id = 0) {
	let url = 'api/movie';
	if (id > 0 ) return `${domain}/${url}/${id}`;

	return url;
}

export function constructHotMovieUrl(limit, page) {
	return `${domain}/api/moviehot?limit=${limit}&page=${page}`
}

export function constructPromotionMovieUrl(limit = 10) {
	return `${domain}/api/moviepromotion?limit=${limit}`
}

export function constructHomeBannerMovieUrl(limit = 10) {
	return `${domain}/api/movielast?limit=${limit}`
}

export function constructLastMoviesUrl(limit, page) {
	return `${domain}/api/movielast?limit=${limit}&page=${page}`;
}

export function constructPostCommentUrl() {
	return `${domain}/api/comment`;
}

export function constructMovieCommentsUrl(mid, limit, page) {
	return `${domain}/api/moviecomments?id=${mid}&limit=${limit}&page=${page}`
}

export function constructMovieHotCommentsUrl(mid, limit, page) {
	return `${domain}/api/comments/movie/hot?id=${mid}&limit=${limit}&page=${page}`
}

export function constructRelatedMovieUrl(mid, limit, page) {
	return `${domain}/api/movierelated?mid=${mid}&limit=${limit}&page=${page}`
}

export function constructSearchUrl(keyword, limit, page) {
	return `${domain}/api/moviesearch?keyword=${decodeURIComponent(keyword)}&limit=${limit}&page=${page}`
}

export function constructYearMovieUrl(year, limit, page) {
	return `${domain}/api/movieyears/movies?year=${year}&limit=${limit}&page=${page}`
}

export function constructCategoryLoadUrl(id) {
	return `${domain}/api/category/${id}`;
}

export function constructCategoryMoviesUrl(id, limit, page) {
	return `${domain}/api/categorymovies/${id}?page=${page}&limit=${limit}`;
}






