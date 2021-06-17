const playerModel = require("./../models/PlayerModel");

class Player {
    async createPlayer(data) {
        const newPlayer = new playerModel(data)
        await newPlayer.save()
        return newPlayer
    }
    async findByPlayerNumber(data) {
        return await playerModel.findOne({player_number: data})
    }
    async findPlayerAndDelete(id, clubID) {
        return await playerModel.findOneAndDelete({_id:id, club:clubID})
    }
    async findAllPlayers(id) {
        return await playerModel.find({club:id})
    }
}

module.exports = new Player()