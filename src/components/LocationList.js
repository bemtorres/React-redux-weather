import React from 'react';
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types';



const LocationList  = ({ cities,onSelectedLocation }) =>  {
    
    const handleWeatherLocationClick = city => {
        onSelectedLocation(city);
    };

    const strToComponent = cities => (   
        cities.map( city => (<WeatherLocation city={city} key={city} onWeatherLocationClick={ () => handleWeatherLocationClick(city) } /> ))   
    );

    return (
        <div>
            {strToComponent(cities)}
        </div>
    );
}

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation : PropTypes.func,
}

export default LocationList;