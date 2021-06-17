const jwt = require("jsonwebtoken");
const matchScheduleModel = require("./../models/matchScheduleModel");
const { NotFoundError, BadRequestError } = require("./../../lib/appError");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const matchSchedule = await matchScheduleModel.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });

    if (!matchMaker)
      throw new NotFoundError(
        "user was not found please check the token and try again",
        404
      );

    req.matchMaker = matchMaker;
    req.token = token;

    next();
  } catch (e) {
    res.status(401).send({ error: "please Authenticate" });
  }
};

module.exports = auth;
