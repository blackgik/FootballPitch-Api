const express = require("express");
require("express-async-errors")
require("dotenv").config();
require("./db/mongoose");


const app = express();
const port = process.env.PORT;

app.use(express.json());

// middlewares

app.listen(port, () => {
  console.log(`server is up on port ${port}`);
});
