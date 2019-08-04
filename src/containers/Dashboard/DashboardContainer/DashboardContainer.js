import Dashboard from '../Dashboard';
import { connect } from 'react-redux';
import * as action from '../../../store/actions';

const mapStateToProps = (state, ownProps) => {
    return {
        favorites: state.favoritesReducer.favorites,
        locationName: ownProps.locationName,
        locationKey: ownProps.locationKey
    }
}


const mapDispatchToProps = dispatch => ({
    addFavorites: (fav) => dispatch(action.addFavorite(fav)),
    getFavorites: () => dispatch(action.getFavorites()),
    removeFromFavorites: (id) => dispatch(action.removeFromFavorites(id))
})

const DashboardContainer = connect(mapStateToProps, mapDispatchToProps)(Dashboard);

export default DashboardContainer;
