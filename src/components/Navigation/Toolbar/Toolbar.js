import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import classes from './Toolbar.css';
const toolbar = props => {

    let classesArr = [classes.Toolbar, classes.DarkToolbar]
    if (!props.dark) {
        classesArr = [classes.Toolbar, classes.LightToolbar]
    }

    return (
        <header className={classesArr.join(" ")}>
            <DrawerToggle />
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    )

};

export default toolbar;
