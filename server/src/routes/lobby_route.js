import express from "express";
import { createLobby } from "../controllers/lobby_controller.js";

const lobbyRoute = express.Router();

lobbyRoute.post("/", createLobby);

export default lobbyRoute;
