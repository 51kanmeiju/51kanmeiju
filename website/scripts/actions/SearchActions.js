import * as requestConstant from '../constants/RequestConstant';
import {constructSearchUrl} from '../utils/URLUtils';

export function searchMovie(keyword, page = 1, limit = 20) {
	return dispatch => {
		fetch(constructSearchUrl(keyword, limit, page))
		.then(res => res.json())
		.then(json => {
			dispatch({
				type: requestConstant.REQUEST_SEARCH_RESULTS,
				results: json.data
			});
		});
	};
}

export function searchBarActiveChanged(active) {
	return {
		type: requestConstant.SEARCH_BAR_ACTIVE_CHANGED,
		searchBarActive: active
	};
}

export function searchKeywordChanged(keyword, page = 1, limit = 20) {
	keyword = keyword.trim();
	return dispatch => {
		dispatch({
			type: requestConstant.SEARCH_KEYWORD_CHANGED,
			keyword: keyword
		});

		// 至少2个字符 才开始搜索
		if (keyword.trim().length > 1) {
			dispatch(searchMovie(keyword, page, limit));
		}
	};
}