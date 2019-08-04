import React from 'react';
import classes from './DegreesButton.css';
import HeaderButtonsContext from '../../../Contexts/headerButtonsContext';

const degreesButton = () => (
    <HeaderButtonsContext.Consumer>
        {context =>
            <button onClick={context.setDegreesMode}
                className={classes.Button}>
                ° {context.degrreMode ? 'F' : 'C'}
            </button>
        }
    </HeaderButtonsContext.Consumer>
)

export default degreesButton;