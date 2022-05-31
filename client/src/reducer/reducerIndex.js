import {GET_ALL_RECIPES} from '../actions/actions' 


const initialState = {
    recetas: []
}


export default function rootReducer(state = initialState, action){
    switch (action.type) {
        case GET_ALL_RECIPES:
          return{
            ...state, 
            recetas: action.payload
          }
    
        default:
          return {...state}
      }
};