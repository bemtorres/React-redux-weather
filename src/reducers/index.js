import { combineReducers } from 'redux';

import { city } from './city';
import { cities , getForecastDataFromCities as _getForecastDataFromCities } from './cities';


export default combineReducers({
    cities,
    city
});

export const getCity = state => state.city;
export const getForecastDataFromCities = state => (_getForecastDataFromCities(state.cities,getCity(state)));
