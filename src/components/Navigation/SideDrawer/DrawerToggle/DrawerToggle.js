import React from 'react';
import classes from './DrawerToggle.css';
import navigataionContext from '../../../../Contexts/navigationContext';
const drawerToggle = () => (
    <navigataionContext.Consumer>
        {context =>
            <div className={classes.DrawerToggle} onClick={context.SideDrawerToggle}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        }
    </navigataionContext.Consumer>
);

export default drawerToggle;