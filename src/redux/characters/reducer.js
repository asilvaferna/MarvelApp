import * as types from './types';

const initialState = {
    list: [],
    total: 0,
    isFetching: false,
    offset: 0
}

export default function reducer(state = initialState, action = {}) {
    switch(action.type) {
        case types.CHARACTERS_UPDATE_LIST:
            return {
                ...state,
                list: action.list,
                total: action.total
            };
            
        case types.CHARACTERS_UPDATE_FETCHING:
            return {
                ...state,
                isFetching: action.value
            };
        
        case types.CHARACTERS_UPDATE_OFFSET:
            return {
                ...state,
                offset: action.value
            }

        default:
            return state;
    }
} 