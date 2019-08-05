import React,{useContext} from 'react';
import classes from './FavoritesList.css';
import Favorite from './Favorite/Favorite';
import HeaderButtonsContext from '../../Contexts/headerButtonsContext';
const FavoritesList = props => {

  const context = useContext(HeaderButtonsContext);

  let classesArr = [classes.FavoritesList, classes.DarkFavoritesList]
  if (!context.screenMode) {
      classesArr = [classes.FavoritesList, classes.LightFavoritesList]
  }

  const favoritesList = (

    props.favoritesList.map(favorite => {
      return (
        <Favorite key={favorite.id}
          name={favorite.name}
          locationKey={favorite.id}
          temp={favorite.temp}
          weatherText={favorite.weatherText}
          unit={favorite.unit}
          removeFromFavorite={props.removeFromFavorite}
        />
      )
    })
  )

  return (

    <div className={classesArr.join(" ")}>
      {favoritesList}
    </div>

  )


}

export default FavoritesList;
