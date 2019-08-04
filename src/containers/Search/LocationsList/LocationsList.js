import React from 'react';
import Location from '../LocationsList/Location/Location';
import classes from './LocationsList.css';
const locationsList = props => {

    return (
        <ul className={classes.List}>
            {
                props.locations.map(location =>
                    <Location key={location.Key}
                        locationName={`${location.LocalizedName},${location.Country.LocalizedName}`}
                        locationKey={location.Key}
                    />
                )
            }
        </ul>
    )
};

export default locationsList;