import React from 'react';
import classes from './FavoritesList.css';
import Favorite from './Favorite/Favorite';
import { Link } from 'react-router-dom';

const favoritesList = props => {
  const favoritesList = (

    props.favoritesList.map(favorite => {
      return (
        <Link className={classes.Link} to={`/${favorite.id}/${favorite.name}`}
          key={favorite.id}>
          <Favorite
            name={favorite.name}
            locationKey={favorite.id}
            temp={favorite.temp}
            weatherText={favorite.weatherText}
            unit={favorite.unit}
          /></Link>
      )
    })
  )

  return (

    <div className={classes.FavoritesList}>
      {favoritesList}
    </div>

  )


}

export default favoritesList;