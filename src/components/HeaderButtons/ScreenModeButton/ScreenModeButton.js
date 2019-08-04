import React from 'react';
import classes from './ScreenModeButton.css';
import HeaderButtonsContext from '../../../Contexts/headerButtonsContext';

const screenModeButton = () => (
    <HeaderButtonsContext.Consumer>
        {context =>
            <button onClick={context.setScreenMode}
                className={classes.Button}>
                {context.screenMode ? 'Light' : 'Dark'}
            </button>
        }
    </HeaderButtonsContext.Consumer>
)

export default screenModeButton;