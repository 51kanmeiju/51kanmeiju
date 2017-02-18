import * as requestConstant from '../constants/RequestConstant';

const initState = {
	category: {},
	movies: {
		list: [],
		total: 1
	},
};
export default function (state = initState, action) {
	switch (action.type) {
		case requestConstant.REQUEST_CATEGORY_OBJECT:
			return Object.assign({}, state, {
				category: action.category
			});
		case requestConstant.REQUEST_CATEGORY_MOVIES:
			return Object.assign({}, state, {
				movies: action.movies
			});
	}
	return state;
};