const clubModel = require("./../models/ClubModel");

class Club {
    async create(data) {
        const newClub = new clubModel(data)
        await newClub.save()
        return newClub
    }
    async findByName(clubName) {
        return await clubModel.findOne({club_name: clubName})
    }
}

module.exports = new Club();