import { createStore } from 'redux';
import {city} from './../reducer/city';

const initialState = {
    city:'Chile'
};


export const store = createStore(city,initialState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

 