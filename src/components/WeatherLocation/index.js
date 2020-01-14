import React , {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData/index';
import transformWeather from './../../services/transformWeather';
import PropTypes from 'prop-types';
// import Button from "@material-ui/core/Button";
import './styles.css';
import { CircularProgress } from '@material-ui/core';
import {URL_WEATHER,API_KEY} from './../../constants';


class WeatherLocation extends Component{ 

    constructor({ city }){
        super();
        this.state = {
            city,
            data:null
        }
    } 

    handlerUpdateClick = () =>{
        const {city} = this.state;
        const api_wather = `${URL_WEATHER}?q=${city}&APPID=${API_KEY}`;
        fetch(api_wather)
        .then( resp => {
            return resp.json();
        }).then(weather_data =>{
            const data = transformWeather(weather_data);
            this.setState({data});
        });
    }
    // LIFECYCLE
    // UNSAFE_componentWillMount en el update del 2018 se cambio esto para el construct
    UNSAFE_componentWillMount() {
        this.handlerUpdateClick();
    }

 
        
    render = () => {
        const {city, data} = this.state;        
        // console.log("render");
        const {onWeatherLocationClick} = this.props;
        return(
            <div className="weatherLocation" onClick={onWeatherLocationClick}>
                <Location city={city}/>
                {data ?  <WeatherData props={data}/>  : <CircularProgress variant="determinate" value={55} />}          
            </div>
        );
    };

}

WeatherLocation.propTypes = {
    city : PropTypes.string,
    onWeatherLocationClick:  PropTypes.func,
}


export default WeatherLocation;