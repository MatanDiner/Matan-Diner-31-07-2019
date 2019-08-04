import * as actionType from './actionType';

const addFavoriteSuccess = location => {
    return {
        type: actionType.ADD_FAVORITE_SUCCESS,
        location
    }
}

export const addFavorite = (location) => {

    return dispatch => {
        fetch(`https://weather-globe.firebaseio.com/favorites/${location.id}.json`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(location),
        })
            .then(res => res.json())
            .then(data => {
                dispatch(addFavoriteSuccess(data))
            })
            .catch(error => {
                console.log('addFavorite Error:', error);
            })
    }
}


const getFavoritesSuccess = (favorites) => {
    return {
        type: actionType.GET_FAVORITES,
        favorites: favorites
    }
}


export const getFavorites = () => {

    return dispatch => {
        fetch('https://weather-globe.firebaseio.com/favorites.json')
            .then(response => response.json())
            .then(data => {
                const favorites = [];
                for (let key in data) {
                    favorites.push({
                        ...data[key],
                    })
                }
                dispatch(getFavoritesSuccess(favorites))
            })
            .catch(error => {
                console.log('addFavorite Error:', error);
            })
    }
}

const removeFromFavoritesSuccess = id => {
    return {
        type: actionType.REMOVE_FAVORITE_SUCCESS,
        id: id
    }
}

export const removeFromFavorites = id => {
    return dispatch => {
        fetch(`https://weather-globe.firebaseio.com/favorites/${id}.json`, { method: 'DELETE' })
            .then(res => dispatch(removeFromFavoritesSuccess(id)))
            .catch(err => console.error(err))
    }
}

