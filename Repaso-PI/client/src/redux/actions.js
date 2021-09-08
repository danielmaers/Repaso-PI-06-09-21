import axios from "axios";


export const GET_ALL_CHARACTERS= "GET_ALL_CHARACTERS"

export function getAllCharacters(){
    return function(dispatch){
        return axios.get("localhost:3001/character")
        .then(response=>dispatch({type:GET_ALL_CHARACTERS, payload: response.data}))
    }
}