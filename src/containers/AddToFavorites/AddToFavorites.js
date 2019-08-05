import React, { useState,useEffect } from 'react';
import FaHeartO from 'react-icons/lib/fa/heart-o';
import classes from './AddToFavorites.css';

const AddToFavorites = props => {

    const [isAnimateState, setIsAnimateState] = useState({
        isAnimate: null
    })

    useEffect(()=>{
        setIsAnimateState({  isAnimate: false})
    },[props.locationKey])

    const setAnimationClasses = () => {
        setIsAnimateState({
            isAnimate: !props.isFavorite
        })
    }


    let iconClass = classes.noFavoriteIcon;
    if (props.isFavorite) {
        iconClass = classes.favoriteIcon;
    }

    let classesArr = [classes.AddToFavorites]
    if (isAnimateState.isAnimate) {
        classesArr = [classes.AddToFavorites, classes.AddToFavoritesAnimation].join(" ");
    }

    return (
        <div className={classesArr}>
            <div><FaHeartO className={iconClass}
                onClick={() => {
                    setAnimationClasses();
                    props.addToFavoritesToggle(props.isFavorite)
                }} /></div>
        </div>
    )
}


export default AddToFavorites;
