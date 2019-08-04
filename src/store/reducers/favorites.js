import * as actionType from '../actions/actionType';

const initialState = {
    favorites: null
}

const getFavoritesSuccess = (state, action) => {
    return {
        ...state,
        favorites: action.favorites
    }
}

const addFavoriteSuccess = (state, action) => {
    return {
        ...state,
        favorites: state.favorites.concat(action.location)
    }
}

const removeFromFavoritesSuccess = (state, action) => {
    const favorites = state.favorites.filter(fav => fav.id !== action.id);
    return {
        ...state,
        favorites
    }
}



const favoritesReducer = (state = initialState, action) => {

    switch (action.type) {

        case actionType.GET_FAVORITES: return getFavoritesSuccess(state, action); break;
        case actionType.ADD_FAVORITE_SUCCESS: return addFavoriteSuccess(state, action); break;
        case actionType.REMOVE_FAVORITE_SUCCESS: return removeFromFavoritesSuccess(state, action); break;
        default: return state;
    }

}


export default favoritesReducer;