import {GET_ALL_RECIPES, 
  DIET_TYPE_FILTER, 
  FILTRO_CREACION, 
  ALPHABETICAL_SORT,
  SCORE_SORT} from '../actions/actions' 


const initialState = {
    recetas: [],
    recetasCopy: [],
    diets: []
}

export default function rootReducer(state = initialState, action){
  switch (action.type) {
    case GET_ALL_RECIPES:
      return{
        ...state, 
        recetas: action.payload,
        recetasCopy: action.payload
      }
      
          case DIET_TYPE_FILTER:
            const todasRecetas = state.recetasCopy
            const filtroDieta = todasRecetas.filter(r => r.dieta?.some(d => d === action.payload))

            return{
              ...state,
              recetas: filtroDieta
            }
            case FILTRO_CREACION:
              const dFilter = state.recetasCopy
              const dataFiltrada = action.payload === 'created' ? dFilter.filter(f => f.creadoEnDb) : dFilter.filter(fil => !fil.creadoEnDb)
              return{
                ...state,
                recetas: action.payload === "all" ? state.recetasCopy : dataFiltrada
              }
              case ALPHABETICAL_SORT:
                const array = action.payload === "asc" ? state.recetas.sort(function(a, b){
                  if(a.name > b.name){
                    return 1
                  }
                  if(b.name > a.name){

                    return -1
                  }
                  return 0
                }) :
                state.recetas.sort(function(a, b){
                  if(a.name > b.name){
                    return -1
                  }
                  if(b.name > a.name){

                    return 1
                  }
                  return 0
                })

                return{
                  ...state,
                  recetas: array
                }

                case SCORE_SORT:
                  let sortedArr = action.payload === 'UP' ? state.recetas.sort(function (a, b) {
                      if (a.score > b.score) {
                          return 1
                      }
                      if (b.score > a.score) {
                          return -1
                      }
                      return 0
                  }) :
                      state.recetas.sort(function (a, b) {
                          if (a.score > b.score) {
                              return -1
                          }
                          if (b.score > a.score) {
                              return 1
                          }
                          return 0
                      })
                  return {
                      ...state,
                      recetas: sortedArr
                  }




        default:
          return {...state}
      }
};