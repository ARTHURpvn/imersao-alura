import { getAllPosts, createPost, updatePost } from "../models/postsModel.js";
import gemineDescription from "../services/gemine-service.js";
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
    res.status(500).json({ "Erro": "Falha na requisição" });
  }
};

export const uploadImage = async (req, res) => {
  const newPost = {
    description: "",
    imgUrl: req.file.originalname,
    alt: "",
  };

  try {
    const createdPost = await createPost(newPost);
    const imagePath = `uploads/${createdPost.insertedId}.png`;
    fs.renameSync(req.file.path, imagePath);
    res.status(200).json(createdPost);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ "Erro": "Falha na requisição" });
  }
};

export const editPost = async (req, res) => {
  const id = req.params.id;
  const urlImage = `http://localhost:3000/${id}.png`;

  try {
    const imageBuffer = fs.readFileSync(`./uploads/${id}.png`);
    const description = await gemineDescription(imageBuffer);

    const post = {
      description: description,
      imgUrl: urlImage,
      alt: req.body.alt,
    };

    const createdPost = await updatePost(id, post);
    res.status(200).json(createdPost);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Falha na requisição" });
  }
};
