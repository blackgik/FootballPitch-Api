const clubService = require("./../services/ClubService");
const appResponse = require("./../../lib/appResponse");
const {
  BadRequestError,
  DuplicateError,
  InternalServerError,
} = require("./../../lib/appError");

class Club {
  async createClub(req, res) {
    if (!req?.body) throw new BadRequestError("invalid inputs");
    const isExisting = await clubService.findByName(req.body.club_name);
    if (isExisting) throw new DuplicateError("club already exists");

    const newClub = await clubService.create(req.body);
    if (!newClub)
      throw new InternalServerError("something went wrong in saving data");
    const token = await newClub.generateToken();

    res
      .status(201)
      .send(appResponse("Club was Created Successfully", { newClub, token }));
  }
}

module.exports = new Club()