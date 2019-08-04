import React, { useState, useEffect, useContext } from 'react';
import FavoritesList from '../FavoritesList/FavoritesList';
import { getFavoritesList } from '../../services/weather';
import HeaderButtonsContext from '../../Contexts/headerButtonsContext';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './Favorites.css';

const Favorites = props => {

    const context = useContext(HeaderButtonsContext);

    const [favoritesState, setFavoritesState] = useState({
        favoritesList: null,
    })

    const [errorState, setErrorState] = useState({
        error: false,
        errorMassage: ""
    })

    useEffect(() => {
        props.getFavorites();
    }, [])

    useEffect(() => {
        if (props.favorites) {
            getFavoritesList(context.degrreMode, props.favorites)
                .then(favorites => {
                    setFavoritesState({
                        favoritesList: favorites,
                    })
                })
                .catch(err => {
                    setErrorState({
                        error: true,
                        errorMassage: `An error occurred while trying to get Your favorits List.`
                    })
                })
        }
    }, [context.degrreMode, props.favorites])


    const modalClosed = () => {
        setErrorState({
            error: false,
            errorMassage: ""
        })
    }

    let errorMassage = null;
    if (errorState.error) {
        errorMassage = <Modal show={errorState.error}
            modalClosed={() => modalClosed()} >
            {errorState.errorMassage}</Modal>
    }

    let favoriteList = <Spinner />
    if (favoritesState.favoritesList) {
        favoriteList = <FavoritesList favoritesList={favoritesState.favoritesList} />
    }

    return (

        <div>
            {errorMassage}
            <div className={classes.favoriteList}>
                {favoriteList}
            </div>
        </div>

    )

}


export default Favorites;