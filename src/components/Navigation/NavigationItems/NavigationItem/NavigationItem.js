import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItem.css'
import HeaderButtonsContext from '../../../../Contexts/headerButtonsContext';
const NavigationItem = props => {
    const context = useContext(HeaderButtonsContext);

    let classesArr = [classes.NavigationItem, classes.DarkNavigationItem]
    if (!context.screenMode) {
        classesArr = [classes.NavigationItem, classes.LightNavigationItem]
    }

    return (
        <li className={classesArr.join(" ")}>
            <NavLink activeClassName={classes.active} to={props.link} exact={props.exact}>{props.children}</NavLink>
        </li>
    )
};


export default NavigationItem;