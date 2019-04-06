import * as types from './types'
import * as api from '../../webservice';

function updateCharactersList(list, total) {
    return {
        type: types.CHARACTERS_UPDATE_LIST,
        list: list,
        total
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

export function updateCharactersListOffset() {
    return function(dispatch, getState) {
      const offset = getState().characters.offset + 10;
      console.log('Offset', offset);
      dispatch(updateOffset(offset));
      dispatch(fetchCharactersList());
    };
  }
  