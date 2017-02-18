import * as requestConstant from '../constants/RequestConstant';

const initState = {
	searching: false,
	keyword: '',
	searchBarActive: true, // 搜索框是否显示中
	results: {
		list: [],
		total: 1
	}
};

export default function (state = initState, action) {
	switch (action.type) {
		case requestConstant.SEARCH_KEYWORD_CHANGED:
			return Object.assign({}, state, {
				keyword: action.keyword,
				searching: action.keyword.length <= 0 ? false: true
			});

		case requestConstant.REQUEST_SEARCH_RESULTS:
			return Object.assign({}, state, {
				results: action.results
			});

		case requestConstant.SEARCH_BAR_ACTIVE_CHANGED:
			return Object.assign({}, state, {
				searchBarActive: action.searchBarActive
			});
	}

	return state;
}