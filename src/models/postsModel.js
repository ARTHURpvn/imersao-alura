import connectDB from "../config/dbConfig.js";

// Conectando ao banco
const conn = await connectDB(process.env.CONNECTION_MONGODB);

export default function getAllPosts() {
  const db = conn.db("imersao-instabytes");
  const posts =  db.collection("posts").find().toArray();
  return posts;
}
