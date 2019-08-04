import React, { useContext } from 'react';
import classes from './Favorite.css';
import HeaderButtonsContext from '../../../Contexts/headerButtonsContext';

const Favorite = props => {

    const context = useContext(HeaderButtonsContext);

    let classesArr = [classes.Favorite, classes.DarkFavorite];
    if (!context.screenMode) {
        classesArr = [classes.Favorite, classes.LightFavorite];
    }

    return (
        <div className={classesArr.join(" ")}>
            <div className={classes.Temp}>
                <label className={classes.Label}>{props.name}</label>
                <label className={classes.Label}>{props.temp}° {props.unit}</label>
            </div>
            <div>
                <label className={classes.WeatherText}>{props.weatherText}</label>
            </div>
        </div>
    );

}

export default Favorite;