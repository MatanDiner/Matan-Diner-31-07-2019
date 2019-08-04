import React from 'react';
import DegreesButton from './DegreesButton/DegreesButton';
import ScreenModeButton from './ScreenModeButton/ScreenModeButton';
import classes from './HeaderButtons.css';

const headerButtons = (props) => {

    let classesArr = [classes.HeaderButtons, classes.DarkHeaderButtons]
    if (!props.dark) {
        classesArr = [classes.HeaderButtons, classes.LightHeaderButtons]
    }

    return (
        <div className={classesArr.join(" ")}>
            <div className={classes.Buttons}>
                <DegreesButton />
                <ScreenModeButton />
            </div>
        </div>
    )
};

export default headerButtons;