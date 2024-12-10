// dependency import
import express from "express";
const app = express();
import cors from "cors";
import "dotenv/config";
import http from "http";
import { Server } from "socket.io";

// internal import
import db from "./src/util/db.js";
import lobbyRoute from "./src/routes/lobby_route.js";
import socketController from "./src/controllers/socket_controller.js";

const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.use("/api/lobby", lobbyRoute);

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.BASE_URL,
  },
});
socketController(io);

if (db) {
  console.log("[INFO] Connected to the database.");

  console.log(`[INFO] Database name: ${db.databaseName}.`);
  server.listen(port, () => {
    console.log(`[INFO] Listening on port ${port}.`);
  });
} else {
  console.log("[ERROR] Database connection couldn't established.");
  process.exit(1);
}
