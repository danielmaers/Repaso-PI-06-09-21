const { Characters, Episodes, Op} = require("../db");
const { v4: uuidv4 } = require("uuid");
const axios = require("axios");

async function getCharacters(req, res, next){
    try {
        // por name
        let { page } = req.query;
        if (!page) page = 1;
        const itemsPerPage = 10; 
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

          // tiene todo

          res.json(dbCharacters.slice(itemsPerPage * ( page -1  ), (itemsPerPage * (page - 1 )) + itemsPerPage));
        })
        
       // res.json(characters)
    } catch (error) {
        next(error)
    }
}
async function getOneCharacter (req,res,next){
    try {
        const { id } = req.params;
        let character;
        if(isNaN(id)){
            character = await Characters.findByPk(id);
        }else{
            character = (await axios.get(`https://rickandmortyapi.com/api/character/${id}`)).data
        }

        res.send(character ? character : "No existe un personaje" );
    } catch (error) {
        next(error)
    }
}
async function addCharacter(req,res,next){
   try {
       const { name, status, image, episodes } = req.body;
        // Characters.create({name, status, image, location})
        // .then(c=> c.addEpisodes(episode) )
        // .then(r =>{
        //    return res.json(r);
        // })
       const newCharacter = await Characters.create({name, status, image});
       await newCharacter.addEpisodes(parseInt(episodes[0])); // para mas de un episodio "Promise.All"
       res.send(newCharacter);

   } 
   catch (error) {
       next(error)
   }
};

async function searchCharacter(req, res, next){
    try {
        const { name } = req.params
        // 
        let result = []
        let dbchars= await Characters.findAll({
            where:{
                name:{
                    [Op.iLike]: `%${name}%`
                }
            }
        })
        if(dbchars && dbchars.length) result = result.concat(dbchars)
     axios.get(`https://rickandmortyapi.com/api/character/?name=${name}`)
     .then((res)=>{
       result =  result.concat(res.data.results)
        return res.json(result)
     })
     .catch(()=>{
        return res.json(result)
     })
    } 
    catch (error) {
        next(error)
    }
}

module.exports={
    getCharacters,
    addCharacter,
    getOneCharacter,
    searchCharacter
}