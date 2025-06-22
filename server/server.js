const express = require("express");
const cors = require("cors");
const authRoutes = require("./Middleware/auth.js");
const medicationRoutes = require("./Routes/medications.js");
const userRoutes = require("./Routes/users.routes.js");
require("dotenv").config();
// const bodyParser = require("body-parser");

const app = express();

app.use(cors());
// app.use(bodyParser.json());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Medicare Home Page");
});
app.use("/api/auth", authRoutes);
app.use("/api/medications", medicationRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
