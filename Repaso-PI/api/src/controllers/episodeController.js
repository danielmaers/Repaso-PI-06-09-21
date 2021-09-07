const { Episodes} = require("../db");

const axios = require('axios');


async function getEpisodes (req,res,next){
    try{
        const episodes = (await axios.get("https://rickandmortyapi.com/api/episode")).data.results
        const dbEpisodes = await Promise.all(
            episodes.map(e => Episodes.findOrCreate({
                where:{name:e.name, episode:e.episode}
            }))
        )
        res.json(dbEpisodes);

        // const [user, created] = await User.findOrCreate({
        //     where: { username: 'sdepold' },
        //     defaults: {
        //       job: 'Technical Lead JavaScript'
        //     }
        //   });
    }
    catch(error){
        next(error);
    };
   
};

module.exports = {
    getEpisodes,
}