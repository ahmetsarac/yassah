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

export { createLobby };
