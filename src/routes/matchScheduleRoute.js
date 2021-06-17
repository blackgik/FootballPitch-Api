const router = require("express").Router();
const matchScheduleController = require("./../controllers/matchScheduleController");
const joiValidator = require("./../validators/index");
const { MatchScheduleSchema } = require("./../validators/MatchScheduleSchema");
const matchAuth = require("./../middleware/MatchAuth")


module.exports = function () {
  router.post(
    "/match-schedule",
    joiValidator(MatchScheduleSchema),
    matchScheduleController.createMatchScedule
  );
    router.get("/all-match-schedules", matchScheduleController.getAllSchedules)
  return router;
};
