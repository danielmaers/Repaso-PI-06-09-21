import axios from "axios";
export const GET_CHARACTER_BY_ID = "GET_CHARACTER_BY_ID"
export const GET_ALL_CHARACTERS = "GET_ALL_CHARACTERS"
export const GET_SEARCH_CHARACTERS = "GET_SEARCH_CHARACTERS"
export const GET_EPISODES = "GET_EPISODES"
export const UNMOUNT_CHARACTER_BY_ID = "UNMOUNT_CHARACTER_BY_ID"
export const SORT_CHARACTERS = "SORT_CHARACTERS";

export function getAllCharacters(page){
    return function(dispatch){
         axios.get("http://localhost:3001/character?page="+page)
        .then(response=>{
           return dispatch({type:GET_ALL_CHARACTERS, payload: response.data})
        })
    }
}

export function getSearchCharacters(name){
    return function(dispatch){
        axios.get(`http://localhost:3001/character/searchCharacter/${name}`).then(response =>{
           dispatch(
               {
                   type: GET_SEARCH_CHARACTERS, 
                   payload: response.data
                })
        })
        .catch(e=>console.log(e))
    }
}

export function getEpisodes(){
    return function(dispatch){
        axios.get(`http://localhost:3001/episode`)
        .then(response =>{
           dispatch(
               {
                   type: GET_EPISODES, 
                   payload:  response.data
                })
        })
        .catch(e=>console.log(e))
    }
}
export function createCharacter(values){
    return function(dispatch){
        axios.post("http://localhost:3001/character/add",values)
        .then(r=> console.log(r))
        .catch(e=> console.log(e))
    }
}

export function getCharacterById(id){
    return function(dispatch){
        axios.get(`http://localhost:3001/character/one/${id}`)
        .then(response=> dispatch(
            {
                type: GET_CHARACTER_BY_ID, 
                payload:  response.data
             }))
    }
}

export function unmountCharacterById(){
    return {
                type:UNMOUNT_CHARACTER_BY_ID, 
                payload:{}
             }    
}

export function sortCharacters(order){
    return {
        type: SORT_CHARACTERS,
        payload: order
    }
}
