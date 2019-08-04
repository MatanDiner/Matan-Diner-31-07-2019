import React, { useContext } from 'react';
import classes from './DayForecast.css';
import FaSunO from 'react-icons/lib/fa/sun-o';
import FaMoonO from 'react-icons/lib/fa/moon-o';
import MdCloudQueue from 'react-icons/lib/md/cloud-queue';
import HeaderButtonsContext from '../../../Contexts/headerButtonsContext';

const DayForecast = props => {

    const context = useContext(HeaderButtonsContext);

    let classesArr = [classes.DayNmae, classes.DarkDayNmae]
    if (!context.screenMode) {
        classesArr = [classes.DayNmae, classes.LightDayNmae]
    }
    return (
        <div className={classes.DayForecast}>
            <div className={classesArr.join(" ")}>
                {props.dayName}
            </div>
            <div className={classes.Forecasts}>
                <div className={classes.Day}>
                    <label>Day</label>
                    <div>
                        <FaSunO className={classes.Sun} />
                        <MdCloudQueue className={classes.SunCloud} />
                    </div>
                    <label>{props.tempDay}° {props.unit}</label>
                    <div className={classes.weatherTextDiv}>
                        <label>{props.weatherTextDay}</label>
                    </div>
                </div>
                <div className={classes.Night}>
                    <label>Night</label>
                    <div>
                        <FaMoonO className={classes.Moon} />
                        <MdCloudQueue className={classes.MoonCloud} />
                    </div>
                    <label>{props.tempNight}° {props.unit}</label>
                    <div className={classes.weatherTextDiv}>
                        <label>{props.weatherTextNight}</label>
                    </div>
                </div>
            </div>
        </div>
    )

};


export default DayForecast;