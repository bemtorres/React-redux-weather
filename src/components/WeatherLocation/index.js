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
        // this.state = data1;
        this.state = {
            city,
            // data: data1
            data:null
        }
        // console.log("constructor");
    }
    // ----  2
    // ultimas versiones no es necesario el contructor se puede hacer asi simple 
    // state = {
    //     city: 'Santiago',
    //     data: data1
    // }

    // creando un modelo de la api a obj
    // Cambio de lado
    // getWeatherState = weather =>{
    //     // return SUN;
    //     console.log(weather);
    //     return 'sun';
    // }
    // getTemp = (kelvin) =>{
    //     return  convert(kelvin).from('K').to('C').toFixed(2);
    // }
    // getData = (weather_data) =>{
    //     const { humidity, temp } = weather_data.main;
    //     const { speed } = weather_data.wind;
    //     // const weatherState = this.getWeatherState(this.weather);
    //     const weatherState = weather_data.weather[0].main;
    //     const temperature = this.getTemp(temp);

    //     const data = {
    //         humidity,
    //         temperature,
    //         weatherState,
    //         wind: `${speed} m/s`,
    //     }
    //     return data;
    // }


    handlerUpdateClick = () =>{
        const {city} = this.state;
        const api_wather = `${URL_WEATHER}?q=${city}&APPID=${API_KEY}`;
        fetch(api_wather)
        .then( resp => {
            return resp.json();
        }).then(weather_data =>{
            // const data = this.getData(weather_data);
            const data = transformWeather(weather_data);
            
            this.setState({data});
            // console.log(weather_data);
        });
        // this.setState({
        //     city : 'Calera de tango',
        //     data : data2
        // });
        // console.log("actualizado");
    }
    // LIFECYCLE
    // UNSAFE_componentWillMount en el update del 2018 se cambio esto para el construct
    UNSAFE_componentWillMount() {
        this.handlerUpdateClick();
        // console.log("componentWillMount");
    }

    // componentDidMount() {
    //     console.log("componentDidMount");
    // }

    // componentWillUnmount() {
    //     console.log("componentWillUnmount");
    // }

    // componentWillUpdate() {
    //     console.log("componentWillUpdate");
    // }

    // componentDidUpdate() {
    //     console.log("componentDidUpdate");
    // }

 
        
    render = () => {
        const {city, data} = this.state;        
        // console.log("render");
        const {onWeatherLocationClick} = this.props;
        return(
            <div className="weatherLocation" onClick={onWeatherLocationClick}>
                <Location city={city}/>
                {data ?  <WeatherData props={data}/>  : <CircularProgress variant="determinate" value={55} />}          
                 
                {/* <Button variant="contained" color="primary" onClick={ this.handlerUpdateClick }>Actualizar</Button> */}
            </div>
        );
    };
    // ---- render 2
    // render = () => (
    //     <div className="weatherLocation">
    //         <Location city={this.state.city}/>
    //         <WeatherData props={this.state.data}/>            
    //         <button onClick={ this.handlerUpdateClick }>Actualizar</button>
    //     </div>
    // );
}

// ** arrow function
// const WeatherLocation = () => (
//     <div className="weatherLocation">
//         <Location city={'Calera de Tango'}/>
//         <WeatherData props={data}/>
//     </div>
// )
WeatherLocation.propTypes = {
    city : PropTypes.string,
    onWeatherLocationClick:  PropTypes.func,
}


export default WeatherLocation;