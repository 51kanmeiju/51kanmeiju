import * as requestConstant from '../constants/RequestConstant';

const initState = {
	years: {
		//
	},
};

export default function(state = initState, action) {
	switch (action.type) {
		case requestConstant.REQUEST_MOVIES_IN_YEAR:
			return Object.assign({}, state, {
				years: {
					[action.year]: action.movies
				}
			});
	}
	return state
}