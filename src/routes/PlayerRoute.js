const router = require("express").Router();
const playerController = require("./../controllers/PlayerController");
const joiValidator = require("./../validators/index");
const { CreatePlayerSchema } = require("./../validators/createplayerSchema");
const auth = require("./../middleware/auth");

module.exports = function () {
  router.post(
    "/create-player",
    joiValidator(CreatePlayerSchema),
    auth,
    playerController.createPlayer
  );
  return router;
};
