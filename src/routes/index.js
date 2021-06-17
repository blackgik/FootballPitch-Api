const clubRoute = require("./ClubRoute")
const playerRouter = require("./PlayerRoute")

module.exports = (router) =>{
    router.use(clubRoute())
    router.use(playerRouter())
    return router
}