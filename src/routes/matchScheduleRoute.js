const router = require("express").Router();
const matchScheduleController = require("./../controllers/matchScheduleController")
const joiValidator = require("./../validators/index")
const { MatchScheduleSchema } = require("./../validators/MatchScheduleSchema")

module.exports = function() {
    router.post("/match-schedule", joiValidator(MatchScheduleSchema), matchScheduleController.createMatchScedule)
    return router
}