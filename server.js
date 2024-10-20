//mongoose.connection as db
import db from "./db/connection.js"; // mongoose.connection
import express from "express";
import logger from "morgan";
import chalk from "chalk";
import dotenv from "dotenv";
dotenv.config();

const app = express()
const PORT = process.env.PORT || 3000;


//TBU: Add more middleware (cors, express.json)

app.use(logger("dev"));


//TBU: Add route


db.on("connected", () => {
  console.clear();
  console.log(chalk.blue("Connected to MongoDB!"));

  app.listen(PORT, () => {
    console.log(`Express server running on port: ${PORT}`);
  });
})