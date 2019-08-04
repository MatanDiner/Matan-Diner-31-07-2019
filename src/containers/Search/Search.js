import React, { useState, useEffect, useContext } from 'react';
import { getLocations } from '../../services/weather';
import LocationsList from './LocationsList/LocationsList';
import classes from './Search.css';
import SearchContext from '../../Contexts/searchContext';
import { isEngliseLetter } from '../../services/search';
import HomeContext from '../../Contexts/homeContext';

const Search = (props) => {

    const contexts = useContext(HomeContext);

    const [locationsListState, setLocationsListState] = useState({
        locationsList: null
    })

    const [inputState, setInputState] = useState({
        value: "",
    })

    useEffect(() => {
        setInputState({
            value: props.name,
        })
    }, [props.name])

    const setSearchList = locations => {
        setLocationsListState({
            locationsList: locations
        })
    }

    const setLocations = async (value) => {
        let locations = null;
        if (value) {
            try {
                locations = await getLocations(value);
                setLocationsListState({ locationsList: locations })
            }
            catch (e) {
                contexts.setError('An error occurred while trying to get locations');
            }
        }
    }

    const onChangeHandler = (e) => {
        const value = e.target.value;
        if (!isEngliseLetter(value) || value === " ") return;
        setInputState({ value });
        setLocations(value);
    }

    let locationsList = null;
    if (locationsListState.locationsList) {
        locationsList = <LocationsList locations={locationsListState.locationsList} />
    }

    return (

        <div className={classes.Search}>
            <input
                className={classes.Input}
                type="text"
                placeholder="Search Location..."
                onChange={(event) => onChangeHandler(event)}
                value={inputState.value}
            />
            <SearchContext.Provider
                value={{
                    setSearchList
                }}
            >
                {locationsList}
            </SearchContext.Provider>
        </div>

    );

}


export default Search;