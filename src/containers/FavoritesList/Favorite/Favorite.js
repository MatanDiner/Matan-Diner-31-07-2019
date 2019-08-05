import React, { useContext } from 'react';
import classes from './Favorite.css';
import HeaderButtonsContext from '../../../Contexts/headerButtonsContext';
import FaInfo from 'react-icons/lib/fa/info';
import FaTrash from 'react-icons/lib/fa/trash';
import { Link } from 'react-router-dom';
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
            <div className={classes.containericons}>
                <div className={classes.iconDiv}>
                    <Link className={classes.Link} to={`/${props.locationKey}/${props.name}`}>
                        <FaInfo className={classes.infoIcon} />
                    </Link>
                    <FaTrash className={classes.deleteIcon} onClick={() => props.removeFromFavorite(props.locationKey)} />
                </div>
            </div>
        </div>

    );

}

export default Favorite;
