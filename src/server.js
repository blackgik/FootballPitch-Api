const express = require("express");
const router = express.Router();
const cors = require("cors");
require("express-async-errors")
require("dotenv").config();
require("./db/mongoose");
const { ErrorHandler } = require("./middleware/ErrorHandler")
const { NotFoundError } = require("./../lib/appError");
const rootRouter = require("./routes/index")(router);


const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get("/status", (req, res, next) => {
    res.status(200).json({
        message: "Server is up and running",
    });
});
// middlewares
app.use(cors())
app.use('/api/v1', rootRouter)

// if route is not handled to the point, return a 404 error
app.use((req, res, next) => {
    next(new NotFoundError());
});

// Error middleware handler
app.use(ErrorHandler)

app.listen(port, () => {
  console.log(`server is up on port ${port}`);
});
