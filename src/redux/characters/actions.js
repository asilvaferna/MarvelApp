import * as types from './types'
import * as api from '../../webservice';

function updateCharactersList(list, total) {
    return {
        type: types.CHARACTERS_UPDATE_LIST,
        list: list,
        total
    };
}

function updateCharactersComics(list) {
    return {
        type: types.CHARACTERS_UPDATE_COMIC_LIST,
        comicList: list
    }
}

function updateFetching(value) {
    return {
        type: types.CHARACTERS_UPDATE_FETCHING,
        value
    }
}

export function updateCharactersSelected(value) {
    return {
        type: types.CHARACTERS_UPDATE_SELECTED,
        value
    }
}

export function fetchCharactersList() {
    return (dispatch, getState) => {
        dispatch(updateFetching(true))
        api
        .fetchCharacters()
        .then(res => {
            const list = res.data.data.results;
            console.log('List: ', list);
            const total = res.data.count
            dispatch(updateCharactersList(list, total));
        })
        .catch(err => {
            console.log('Error: ', err);
        })
        .finally(() => dispatch(updateFetching(false)));
    }
}

export function fetchCharactersComics(id) {
    return (dispatch, getState) => {

        api
        .fetchComics(id)
        .then(res => {
            const list = res.data.data.results
            console.log('ComicList: ', list);
            dispatch(updateCharactersComics(list));
        })
        .catch(err => {
            console.log('Error: ', err);
        })
    }
}