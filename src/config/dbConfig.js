import { MongoClient } from "mongodb";

export default async function connectDB(connectString) {
  let mongoClient;

  try {
    mongoClient = new MongoClient(connectString);
    await mongoClient.connect();
    console.log("Connected to MongoDB");
    return mongoClient;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit();
  }
}
