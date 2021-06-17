const matchScheduleService = require("./../services/MatchScheduleService");
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
}

module.exports = new MatchSchedule();