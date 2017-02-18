import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/index';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default function appStore(initState = {}) {
    const store = compose(createStoreWithMiddleware(rootReducer, initState));

    return store;
}
