import { SET_CITY } from './../actions';

export const city = (state = {},action)=> {
    //detectar cuando el accion sea igual a city
    switch (action.type) {
        case SET_CITY:
            return {
                ...state,
                city: action.payload
            }       
        default:
            break;
    }
    return state;
};



    // if (action.type===SET_CITY){    
    //     return {
    //         ...state,
    //         city: action.value
    //     }   
    // }

