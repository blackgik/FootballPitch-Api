const clubRoute = require("./ClubRoute")
const playerRoute = require("./PlayerRoute")
const matchScheduleRoute = require("./matchScheduleRoute")

module.exports = (router) =>{
    router.use(clubRoute())
    router.use(playerRoute())
    router.use(matchScheduleRoute())
    return router
}