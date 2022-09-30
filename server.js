const express = require("express");
const dotenv = require("dotenv");
const routers = require('./routers/index');
const connectDatabase = require("./helpers/database/connectDatabase")

dotenv.config({
  path: "./config/env/config.env",
});

connectDatabase();

const app = express();

const PORT = process.env.PORT;

app.use("/api",routers);

app.listen(PORT, () => {
  console.log(`App Started on ${PORT} : ${process.env.NODE_ENV}`);
});
