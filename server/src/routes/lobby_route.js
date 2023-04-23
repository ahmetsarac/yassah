import express from "express";
import { checkLobby, createLobby } from "../controllers/lobby_controller.js";

const lobbyRoute = express.Router();

lobbyRoute.post("/", createLobby);
lobbyRoute.get("/:lobbyId", checkLobby);

export default lobbyRoute;
