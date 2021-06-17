const Joi = require("joi");

const MatchScheduleSchema = Joi.object({
    opponents: Joi.object({
        teamA: Joi.string().required().lowercase(),
        teamB: Joi.string().required().lowercase()
    }),
    date: Joi.string().required(),
    time: Joi.string().required(),
    status: Joi.string().required(),
})

module.exports = {
    MatchScheduleSchema
}