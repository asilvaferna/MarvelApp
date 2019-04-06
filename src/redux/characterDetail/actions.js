import * as types from './types'
import * as api from '../../webservice';

function updateComics(list, total) {
    return {
        type: types.CHARACTER_DETAIL_UPDATE_COMICS,
        list: list,
        total
    };
}

function updateFetching(value) {
    return {
        type: types.CHARACTER_DETAIL_UPDATE_FETCHING,
        value
    };
}

export function fetchCharactersComics(id) {
    return (dispatch, getState) => {
        dispatch(updateComics([]));
        dispatch(updateFetching(true));
        api
        .fetchComics(id)
        .then(res => {
            const list = res.data.data.results
            // const total = res.data.data.total
            console.log('ComicList: ', res);
            dispatch(updateComics(list));
        })
        .catch(err => {
            console.log('Error: ', err);
        })
    }
}
  