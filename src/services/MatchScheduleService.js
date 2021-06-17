const matchScheduleModel = require("./../models/matchScheduleModel");

class MatchSchedule {
    async createSchedule(data) {
        const match = new matchScheduleModel(data)
        await match.save()
        return match
    }
}

module.exports = new MatchSchedule();