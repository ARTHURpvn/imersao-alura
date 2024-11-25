import express from "express";
import { routes } from "./src/routes/postsRouts.js";

const app = express();
app.use(express.static("uploads"));
routes(app);

//  Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log("Server is listen on port 3000");
});