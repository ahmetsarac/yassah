import express from "express";
import cors from "cors";
import "dotenv/config";
import db from "./src/util/db.js";
import lobbyRoute from "./src/routes/lobby_route.js";

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.use("/api/lobby", lobbyRoute);

if (db) {
  console.log("connected to the database");
  console.log(`${db.databaseName}`);
  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
} else {
  console.log("database connection error");
  process.exit(1);
}
