const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "./.env") });

const express = require("express");
const app = express();
const cors = require("cors");
const authMiddleware = require("./middleware/authMiddleware");
const authRoutes = require("./routes/authRoutes");
const bioRoutes = require("./routes/bioRoutes");
// const educatorRoutes = require("./routes/educatorRoutes");

// middlewares
// app.use(logger);
app.use(cors());
app.use(express.json());
app.use("/", authMiddleware);
app.use("/auth", authRoutes);
app.use("/bio", bioRoutes);
// app.use("/api/educators", educatorRoutes);

app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5500;

// app.get("/", (_request, response) => {
//   response.status(200).sendFile(path.join(__dirname, "public", "index.html"));
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🚀`);
});
