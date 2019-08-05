import Favorites from '../Favorites';
import { connect } from 'react-redux';
import * as action from '../../../store/actions';

const mapStateToProps = state => ({
    favorites: state.favoritesReducer.favorites
})

const mapDispatchToProps = dispatch => ({
    getFavorites: () => dispatch(action.getFavorites()),
    removeFromFavorites: (id) => dispatch(action.removeFromFavorites(id))
})

const FavorietsContainer = connect(mapStateToProps, mapDispatchToProps)(Favorites);

export default FavorietsContainer;
