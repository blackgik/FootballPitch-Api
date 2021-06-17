const clubRoute = require("./ClubRoute")

module.exports = (router) =>{
    router.use(clubRoute())
    return router
}