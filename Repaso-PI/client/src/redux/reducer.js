import {GET_ALL_CHARACTERS, GET_SEARCH_CHARACTERS,GET_EPISODES} from "./actions"


const initialState={
    characters:[],
    episodes:[],    
}

function reducer(state= initialState, action){

switch(action.type){
 
    case GET_ALL_CHARACTERS:
        return{
            ...state,
            characters: action.payload
        }
  
    case GET_SEARCH_CHARACTERS:
        return{
            ...state,
            characters:action.payload
        }
    case GET_EPISODES:
        return {
            ...state,
            episodes: action.payload
        }
    default: 
     return state
 
}

} 

export default reducer;