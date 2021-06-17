const router = require("express").Router();
const clubController = require("./../controllers/ClubController");
const joiValidator = require("./../validators/index")
const { CreateClubSchema } = require("./../validators/CreateClubSchema")

module.exports = function () {
    router.post("/create-club", joiValidator(CreateClubSchema), clubController.createClub)
    router.get("/get-all-clubs", clubController.getAllClubs)
    return router
}