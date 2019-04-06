import * as types from './types';

const initialState = {
    list: [],
    total: 0,
    isFetching: false,
}

export default function reducer(state = initialState, action = {}) {
    switch(action.type) {
        case types.CHARACTER_DETAIL_UPDATE_COMICS:
            return {
                ...state,
                list: action.list,
                total: action.total
            };
            
        case types.CHARACTER_DETAIL_UPDATE_FETCHING:
            return {
                ...state,
                isFetching: action.value
            };
            
        default:
            return state;
    }
} 