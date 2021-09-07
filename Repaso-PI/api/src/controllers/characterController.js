const { Characters, Episodes} = require("../db");
//const { v4: uuidv4 } = require("uuid");
const axios = require("axios");

async function getCharacters(req, res, next){
    try {
        let characters= await axios.get("https://rickandmortyapi.com/api/character")
        characters= characters.data.results.map(e=>{
            
            return {
                id: e.id,
                name: e.name,
                status: e.status,
                location: e.location.name,
                image: e.image,                
            }
        })
        Characters.findAll({include:{model:Episodes}})
        .then(dbCharacters=>{
          dbCharacters =  dbCharacters.concat(characters);
          res.json(dbCharacters)})
        
       // res.json(characters)
    } catch (error) {
        next(error)
    }
}


module.exports={
    getCharacters
}