import db from "../util/db.js";
import generateId from "../util/generate_id.js";

const createLobby = async (req, res) => {
  const lobbyCreator = req.body.name;
  const lobbyId = generateId(5);
  await db
    .collection("lobbies")
    .insertOne({ id: lobbyId, creator: lobbyCreator });
  res.json({ id: lobbyId });
};

const checkLobby = async (req, res) => {
  const lobbyId = req.params.lobbyId;
  const lobby = await db.collection("lobbies").findOne({ id: lobbyId });
  if (!lobby) {
    return res.status(400).json({ message: "lobby couldn't found" });
  }
  return res.status(200).json(lobby);
};

export { createLobby, checkLobby };
