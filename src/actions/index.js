
import transformForecast from './../services/transformForecast';
import {URL_FORECAST,API_KEY} from './../constants';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECASTDATA';

const setCity = payload => ({ type: SET_CITY, payload });
// export  const setCity = value => ({ type:SET_CITY , value });
export const setForecastData = payload => ({ type:SET_FORECAST_DATA , payload });

// middlewares
export const setSelectedCity = payload => {
    return dispatch => {
        
        const url_fetchForecast = `${URL_FORECAST}?q=${payload}&APPID=${API_KEY}`;

        //activar en el estado un indicador de busqueda de datos
        dispatch(setCity(payload));

        return fetch(url_fetchForecast)
        .then( resp => {
            return resp.json();
        }).then(weather_data =>{
            const forecastData = transformForecast(weather_data);
            console.log(forecastData);

            // Modificar el resultado con la promesa
            dispatch(setForecastData({ city : payload, forecastData}));
            }
        );

        
    };
};