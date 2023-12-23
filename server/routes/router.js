var express = require('express');
var router = express.Router();

const character = require('../controllers/character')

router.post("/character/create", character.character_create);

module.exports = router;
