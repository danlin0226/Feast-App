const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "./.env") });
const knex = require("knex")(require("./knexfile"));

const express = require("express");
const app = express();
const cors = require("cors");
const authMiddleware = require("./middleware/authMiddleware");
const authRoutes = require("./routes/authRoutes");
const bioRoutes = require("./routes/bioRoutes");
const postRoutes = require("./routes/postRoutes");

// middlewares
// app.use(logger);
app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  knex("listings")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch(() => {
      res.status(400).send("error retrieving posts");
    });
});

app.use("/", authMiddleware);
app.use("/posts", postRoutes);
app.use("/auth", authRoutes);
app.use("/auth/bio", bioRoutes);

app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🚀`);
});
