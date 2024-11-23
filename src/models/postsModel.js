import connectDB from "../config/dbConfig.js";

// Conectando ao banco
const conn = await connectDB(process.env.CONNECTION_MONGODB);

export const getAllPosts = () => {
  const db = conn.db("imersao-instabytes");
  const posts = db.collection("posts").find().toArray();
  return posts;
};

export const createPost = (post) => {
  const db = conn.db("imersao-instabytes");
  const collection = db.collection("posts").insertOne(post);

  return collection;
};
