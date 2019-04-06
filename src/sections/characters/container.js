import { connect } from 'react-redux';
import View from './view';
import * as CharactersActions from '../../redux/characters/actions'

const mapStateToProps = (state) => {
    return {
        list: state.characters.list,
        comicList: state.characters.comicList,
        total: state.characters.total,
        isFetching: state.characters.isFetching
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchCharactersList: () => {
            dispatch(CharactersActions.fetchCharactersList());
        },
        updateCharactersListOffset: () => {
            dispatch(CharactersActions.updateCharactersListOffset());
        },
        fetchCharactersComics: id => {
            dispatch(CharactersActions.fetchCharactersComics(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);