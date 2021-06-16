const mongoose = require("mongoose");

const url = process.env.MONGODB_URL

mongoose.connect(url, {
    useCreateIndex: true,
    useFindAndModify:false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=> {
    console.log("database connected successfully")
}).catch((err)=> {
    console.log("An Error occured connecting to DB: " + err)
})