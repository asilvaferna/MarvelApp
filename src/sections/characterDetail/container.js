import { connect } from 'react-redux';
import View from './view';
import * as CharacterDetailActions from '../../redux/characterDetail/actions';

const mapStateToProps = (state) => {
    return {
        list: state.characterDetail.list,
        total: state.characterDetail.total,
        isFetching: state.characterDetail.isFetching
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchComics: id => {
            dispatch(CharacterDetailActions.fetchCharactersComics(id));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);