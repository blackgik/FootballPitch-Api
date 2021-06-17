const Joi = require("joi");

const CreateClubSchema = Joi.object({
  club_name: Joi.string().required(),
  club_manager: Joi.object({
    name: Joi.string().required(),
    age: Joi.string().required(),
    nationality: Joi.string().required(),
  }),
  club_stadium: Joi.string().required(),
  number_of_players: Joi.number().required(),
  club_captain: Joi.string().required(),
  club_alias: Joi.string().required(),
  date_founded: Joi.string().required(),
});

module.exports = {
    CreateClubSchema
}