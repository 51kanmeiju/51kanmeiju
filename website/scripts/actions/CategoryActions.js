import {constructCategoryLoadUrl} from '../utils/URLUtils';
import * as requestConstant from '../constants/RequestConstant';

export function loadCategory(id) {
	return dispatch => {
		fetch(constructCategoryLoadUrl(id))
		.then(res => res.json())
		.then(json => {
			dispatch({
				type: requestConstant.REQUEST_CATEGORY_OBJECT,
				category: json.data
			});
		});
	};
}