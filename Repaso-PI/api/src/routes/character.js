const { Router } = require('express');
const {getCharacters} =require("../controllers/characterController")
const router = Router();

router.get("/", getCharacters)


module.exports = router;