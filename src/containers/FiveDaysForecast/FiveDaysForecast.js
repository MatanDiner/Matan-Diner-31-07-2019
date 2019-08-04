import React from 'react';
import DayForecast from './DayForecast/DayForecast';
import classes from './FiveDaysForecast.css';

const fiveDaysForecast = props => {

    const fiveDayForecast = (
        props.fiveDayForecast.map(df => {
            return <DayForecast
                key={df.dayName}
                dayName={df.dayName}
                tempDay={df.day.temp}
                weatherTextDay={df.day.weatherText}
                tempNight={df.night.temp}
                weatherTextNight={df.night.weatherText}
                unit={df.unit}
            />
        })
    )

    let classesArr = [classes.FiveDaysForecast, classes.DarkFiveDaysForecast]
    if (!props.dark) {
        classesArr = [classes.FiveDaysForecast, classes.LightFiveDaysForecast]
    }

    return (
        <div className={classesArr.join(" ")}>
            {fiveDayForecast}
        </div >
    );

};

export default fiveDaysForecast;