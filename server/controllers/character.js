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

exports.character_check = asyncHandler(async(req,res,next) => {
    // console.log(req.body.exactCord)
    const exactCord = req.body.exactCord
    const character = await Character.find({name: req.body.character});
    if(character[0] == null){
        res.sendStatus(401)
    }
    if(character[0].cordY - .025 < exactCord.y && exactCord.y < character[0].cordY + .025 && character[0].cordX - .01 < exactCord.x && exactCord.x < character[0].cordX + .01){
        console.log('Found Him')
    }
    
    res.status(200).json({message: "checked"})
})