const playerService = require("./../services/PlayerService");
const clubService = require("./../services/ClubService")
const { BadRequestError, DuplicateError, InternalServerError } = require("./../../lib/appError")
const appResponse = require("./../../lib/appResponse")

class Player {
    async createPlayer(req, res) {
        if(!req?.body) throw new BadRequestError(" invalid input")
        const isExistingNumber = await playerService.findByPlayerNumber(req.body.player_number)
        if(isExistingNumber) throw new DuplicateError("Player with number alredy exist")

        const data = {
            ...req.body,
            club: req.club._id
        }
        const newPlayer = await playerService.createPlayer(data)
        if(!newPlayer) throw new InternalServerError("Something went wrong in registering player")
         req.club.number_of_players += 1
         await req.club.save()
        res.status(201).send(appResponse("player created successfully", newPlayer))
    }

    async deletePlayer(req, res) {
        const playerDeleted = await playerService.findPlayerAndDelete(req.params.id, req.club._id)
        if(!playerDeleted) throw new InternalServerError("something went wrong in de-registering a player");
        req.club.number_of_players -= 1;
        await req.club.save()
        res.status(200).send(appResponse("player deleted successfully", playerDeleted))
    }
}

module.exports = new Player()