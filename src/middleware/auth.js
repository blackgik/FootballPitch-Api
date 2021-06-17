const clubService = require("./../services/ClubService");
const { UnAuthorizedError, NotFoundError } = require("./../../lib/appError");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    console.log(token)
    if (!token) throw new UnAuthorizedError("Incorrect or no token provided");
    const decoded = await clubService.verifyToken(token);
    console.log(decoded)
    if (!decoded) throw new UnAuthorizedError("not a valid token");
    const club = await clubService.findTokenById(decoded._id, token);
    if (!club) throw new NotFoundError("club not found, Check Token");

    req.club = club;
    req.token = token;

    next()
  } catch (err) {
      throw new UnAuthorizedError("please authenticate")
  }
};

module.exports = auth