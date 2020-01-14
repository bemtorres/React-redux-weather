import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import ForecastItem from './ForescastItem';

const renderForecastItemDays = (forecastData) =>{
    console.log("ACA");
    return forecastData.map(forecast => (
        <ForecastItem 
            key={`${forecast.weekDay}${forecast.hour}`} 
            weekDay={forecast.weekDay} 
            hour={forecast.hour} 
            data={forecast.data}  />
        )
    );
}

const renderProgress = () =>{
    return <h3>Cargando Prónostico Extendido</h3>;
}

const ForecastExtended  =  ({ city,forecastData }) => (
    <div>
        <h2 className='forecast-title'>Información Data {city}</h2>
        { forecastData ?  renderForecastItemDays(forecastData) : renderProgress()}
    </div>
); 

ForecastExtended.propTypes = {
    city: PropTypes.string,
    forecastData: PropTypes.array,
}

export default ForecastExtended;