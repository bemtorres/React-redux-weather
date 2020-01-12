
import convert from 'convert-units';

const getTemp = (kelvin) =>{
    return  Number(convert(kelvin).from('K').to('C').toFixed(2));
}

const transformWeather = (weather_data) =>{
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = weather_data.weather[0].main;
    const temperature = getTemp(temp);

    const data = {
        humidity,
        temperature,
        weatherState,
        wind: `${speed} m/s`,
    }
    return data;
}

export default transformWeather;