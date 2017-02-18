import {combineReducers} from 'redux';
import movie from './movie';
import search from './search';
import year from './year';
import {navigator} from './navigator';
import category from './category';
import user from './user';

const rootReducer = combineReducers({
	movie,
    navigator,
    search,
    year,
    category,
    user
});

export default rootReducer;