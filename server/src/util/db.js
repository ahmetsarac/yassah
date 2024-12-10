import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let connection;

try {
  connection = await client.connect();
} catch (error) {
  console.error("[ERROR] Database connection was failed.");
  console.error(error);
} 

let db = connection.db("yassah");

export default db;
