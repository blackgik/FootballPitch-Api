const Joi = require("joi");

const MatchScheduleSchema = Joi.object({
    opponents: Joi.object({
        teamA: Joi.string().required().lowercase(),
        teamB: Joi.string().required().lowercase()
    }),
    scores: Joi.object({
        teamA: Joi.number().required(),
        teamB: Joi.number().required()
    }),
    date: Joi.string().required(),
    time: Joi.string().required(),
    status: Joi.string().required(),
})

module.exports = {
    MatchScheduleSchema
}