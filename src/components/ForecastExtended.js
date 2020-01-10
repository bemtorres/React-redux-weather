import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import ForecastItem from './ForescastItem';
import transformForecast from './../services/transformForecast';

// const days  =[
//     'Lunes',
//     'Martes',
//     'Miercoles',
//     'Jueves',
//     'Viernes',
//     'Sabado',
//     'Domingo',
// ];
// const data = {
//     temperature: -10,
//     weatherState: "Clouds",
//     humidity: 100,
//     wind: '200 m/s'
// };

const url = "http://api.openweathermap.org/data/2.5/forecast";
const api_key = "dab0117ff85c4b6234172aae16325bbb";


class ForecastExtended  extends Component {

    constructor(){
        super();
        this.state = { forecastData:null };
    }

    renderForecastItemDays(forecastData){
        // return <h1>Render Items</h1>;
        return forecastData.map(forecast => (
            <ForecastItem 
                key={`${forecast.weekDay}${forecast.hour}`} 
                weekDay={forecast.weekDay} 
                hour={forecast.hour} 
                data={forecast.data}  />
            )
        );
    }

    renderProgress = () =>{
        return <h3>Cargando Prónostico Extendido</h3>;
    }

    updateCity = city => {
        const api_wather = `${url}?q=${city}&APPID=${api_key}`;
        fetch(api_wather)
        .then( resp => {
            return resp.json();
        }).then(weather_data =>{
            const forecastData = transformForecast(weather_data);
            console.log(forecastData);
            this.setState({forecastData});
            // console.log(weather_data);
        });
    }

    componentDidMount() {
        // const {city} = this.props;
        this.updateCity(this.props.city);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.city !== this.props.city){
            this.setState({ forecastData:null})
            this.updateCity(nextProps.city);
        }
    }
    

    render(){
        
        const {city} = this.props;
        const {forecastData} = this.state;
        return(
            <div>
                <h2 className='forecast-title'>Información Data {city}</h2>
                 { forecastData ? this.renderForecastItemDays(forecastData) : this.renderProgress()}
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string,
}

export default ForecastExtended;