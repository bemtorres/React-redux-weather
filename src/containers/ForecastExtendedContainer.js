import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastExtended from './../components/ForecastExtended';
import { connect } from 'react-redux';

export class ForecastExtendedContainer extends Component {
    render() {
        const {city, forecastData} = this.props; 
        console.log(city);
        console.log(forecastData);        
        console.log("ACA");
        return (
            city &&
            <ForecastExtended city={city} forecastData={forecastData}/> 
        );
    }
}

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array, 
};

const mapStateToProps = ({city, cities}) =>(
    {
        city,
        forecastData: cities[city] && cities[city].forecastData,
    }
);  //añade a las propededaes

export default connect(mapStateToProps,null)(ForecastExtendedContainer);
