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
    };
}

function updateFetching(value) {
    return {
        type: types.CHARACTERS_UPDATE_FETCHING,
        value
    };
}

function updateOffset(value) {
    return {
        type: types.CHARACTERS_UPDATE_OFFSET,
        value
    };
}

export function fetchCharactersList() {
    return (dispatch, getState) => {
        const { offset, list } = getState().characters
        dispatch(updateFetching(true))
        api
        .fetchCharacters(offset)
        .then(res => {
            const newList = [...list, ...res.data.data.results];
            const total = res.data.count;
            dispatch(updateCharactersList(newList, total));
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

export function updateCharactersListOffset() {
    return function(dispatch, getState) {
      const offset = getState().characters.offset + 10;
      console.log('Offset', offset);
      dispatch(updateOffset(offset));
      dispatch(fetchCharactersList());
    };
  }
  