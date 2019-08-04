import React from 'react';
import classes from './currentCondition.css';
const CurrentCondition = props => {

    return (
        <div>
            <div></div>
            <div className={classes.CurrentDetails}>
                <label>{props.name}</label>
                <label>{props.temp}° {props.unit}</label>
            </div>
        </div>

    );
}
export default CurrentCondition;




