import {GET_ALL_CHARACTERS, 
    GET_SEARCH_CHARACTERS,
    GET_EPISODES, 
    GET_CHARACTER_BY_ID, 
    UNMOUNT_CHARACTER_BY_ID,
    SORT_CHARACTERS} from "./actions"


const initialState={
    characters:[],
    episodes:[],  
    character: {}  
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
    case GET_CHARACTER_BY_ID:
        return {
            ...state,
            character: action.payload
        }    
    case UNMOUNT_CHARACTER_BY_ID:
        return {
            ...state,
            character: action.payload
        }  
    case SORT_CHARACTERS:
        let sorted = state.characters.sort(function(a,b){        
            if(action.payload==="asc")  return a.name.localeCompare(b.name);
            else return b.name.localeCompare(a.name)
        })    
    
        return {
            ...state,
            characters: sorted
        }
    default: 
     return state
 
}

} 

export default reducer;