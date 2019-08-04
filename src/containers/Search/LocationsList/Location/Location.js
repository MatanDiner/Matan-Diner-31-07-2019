import React, { useContext } from 'react';
import classes from './Location.css';
import SearchContext from '../../../../Contexts/searchContext';
import HomeContext from '../../../../Contexts/homeContext';
const Location = props => {

  const searchCont = useContext(SearchContext);
  const homeCont = useContext(HomeContext);

  return (

    <li className={classes.Li}
      onClick={() => {
        searchCont.setSearchList(null);
        homeCont.setLocation({ name: props.locationName, key: props.locationKey })
      }}>
      {props.locationName}
    </li>
  );

}

export default Location;