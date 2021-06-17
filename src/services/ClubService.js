const clubModel = require("./../models/ClubModel");
const jwt = require("jsonwebtoken")

class Club {
    async create(data) {
        const newClub = new clubModel(data)
        await newClub.save()
        return newClub
    }
    async findByName(clubName) {
        return await clubModel.findOne({club_name: clubName})
    }

    async verifyToken(token) {
        return jwt.verify(token, process.env.JWT_SECRET)
    }
    async findTokenById(id, token) {
        return await clubModel.findOne({_id:id, "tokens.token":token})
    }
}

module.exports = new Club();