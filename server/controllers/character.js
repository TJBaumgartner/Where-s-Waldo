const asyncHandler = require("express-async-handler");
const Character = require('../models/character')

exports.character_create = asyncHandler(async(req,res,next) => {
    const xCord = req.body.exactCord.x;
    const yCord = req.body.exactCord.y;
    const character = new Character({
        name: req.body.name,
        cordX: xCord,
        cordY: yCord
    })
    console.log(character)
    await character.save()
    res.status(200).json({message: "Character Created"})
})