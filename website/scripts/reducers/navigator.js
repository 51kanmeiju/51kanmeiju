import * as types from '../constants/ActionTypes';

const initRoute = {
    path: ['home'],
    query: {}
}

const initState = {
    route: initRoute
};

export function navigator(state = initState, action) {
    switch (action.type ) {
        case types.CHANGE_PATH:
            return Object.assign({}, state, {
                route: action.route
            });
        default: 
            return state;
    }

}