import { getAllPosts, createPost } from "../models/postsModel.js";
import fs from "fs";

export const listPosts = async (req, res) => {
  const posts = await getAllPosts();
  res.status(200).json(posts);
};

export const postNewPost = async (req, res) => {
  const newPost = req.body;

  try {
    const createdPost = await createPost(newPost);
    res.status(200).json(createdPost);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Falha na requisição" });
  }
};

export const uploadImage = async (req, res) => {
  const newPost = {
    description: "",
    imgUrl: req.file.originalname,
    alt: ""
  };

  try {
    const createdPost = await createPost(newPost);
    const imagePath = `uploads/${createdPost.insertedId}.jpg`;
    fs.renameSync(req.file.path, imagePath);

    res.status(200).json(createdPost);

  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Falha na requisição" });
  }
};
