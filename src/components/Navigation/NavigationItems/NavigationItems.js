import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';
const NavigationItems = props => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link='/' exact>Home</NavigationItem>
        <NavigationItem link='/favorites'>Favorites</NavigationItem>
    </ul>
);

export default NavigationItems;