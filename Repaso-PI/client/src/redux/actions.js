import axios from "axios";


export const GET_ALL_CHARACTERS = "GET_ALL_CHARACTERS"
export const GET_SEARCH_CHARACTERS = "GET_SEARCH_CHARACTERS"
export const GET_EPISODES = "GET_EPISODES"

export function getAllCharacters(){
    return function(dispatch){
         axios.get("http://localhost:3001/character")
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
