import express from "express";

const posts = [
  {
    id: 1,
    description: "Primeiro Post",
    image: "https://placecats.com/millie/300/150",
  },
  {
    id: 2,
    description: "Post sobre gatos fofos",
    image: "https://placecats.com/millie/300/150",
  },
  {
    id: 3,
    description: "Dicas para cuidar de gatos",
    image: "https://placecats.com/millie/300/150",
  },
  {
    id: 4,
    description: "Gatos fazendo coisas engraçadas",
    image: "https://placecats.com/millie/300/150",
  },
  {
    id: 5,
    description: "Raças de gatos mais populares",
    image: "https://placecats.com/millie/300/150",
  },
  {
    id: 6,
    description: "Gatos explorando a natureza",
    image: "https://placecats.com/millie/300/150",
  },
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Server is listen on port 3000");
});

app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});

function searchPost(id) {
  return posts.findIndex((post) => {
    return post.id === Number(id);
  });
}

app.get("/posts/:id", (req, res) => {
  const index = searchPost(req.params.id);
  res.status(200).json(posts[index]);
});
