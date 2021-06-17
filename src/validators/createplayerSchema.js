const Joi = require("joi");

const CreatePlayerSchema = Joi.object({ 
    player_name: Joi.string().required(),
    player_age: Joi.number().required(),
    player_position: Joi.string().required(),
    player_number: Joi.number().required(),
})

module.exports = {
    CreatePlayerSchema 
}