import { SET_CITY } from './../actions';
export const city = (state,action)=> {
    //detectar cuando el accion sea igual a city
    if (action.type===SET_CITY){
        return {
            ...state,
            city:   action.value
        }   
    }

    return state;
};

