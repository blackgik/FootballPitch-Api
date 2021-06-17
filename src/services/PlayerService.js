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
}

module.exports = new Player()