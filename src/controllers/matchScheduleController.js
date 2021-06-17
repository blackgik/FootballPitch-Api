const matchScheduleService = require("./../services/MatchScheduleService");
const matchScheduleModel = require("./../models/matchScheduleModel")
const clubService = require("./../services/ClubService");
const appResponse = require("./../../lib/appResponse");
const { NotFoundError, BadRequestError } = require("./../../lib/appError");

class MatchSchedule {
  async createMatchScedule(req, res) {
    if (!req?.body) throw new BadRequestError("Invalid input");
    // I need to check if the teams are in the data base
    const teamA = await clubService.findByName(req.body.opponents.teamA);
    const teamB = await clubService.findByName(req.body.opponents.teamB);

    if (!teamA || !teamB)
      throw new NotFoundError("One of the teams are not in the table");

    const match = await matchScheduleService.createSchedule(req.body);
    if (!match) throw new InternalServerError("Something went wrong.");

    res.status(201).send(appResponse("Match Scheduled successfully"));
  }

  async getAllSchedules(req, res) {
    const matchSchedules = await matchScheduleService.findAllSchedules()
    if(!matchSchedules) throw new NotFoundError("schedules not found")
    res.send(appResponse("schedules found successfully", matchSchedules))
  }
}

module.exports = new MatchSchedule();