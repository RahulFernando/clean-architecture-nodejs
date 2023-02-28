import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import database from "./database.js";

// routes
import tutorials from "./routes/tutorials.js";

// initialize mongodb connection
database()
  .then(() => console.log("Databse connected"))
  .catch((err) => console.log(`Connection failed:${err}`));

// initialize express server
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

app.use("/", tutorials);

export default app;
