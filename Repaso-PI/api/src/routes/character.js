const { Router } = require('express');
const {getCharacters, addCharacter, getOneCharacter } =require("../controllers/characterController")
const router = Router();

router.get("/", getCharacters)
router.get("/one/:id", getOneCharacter)
router.post("/add", addCharacter)


module.exports = router;