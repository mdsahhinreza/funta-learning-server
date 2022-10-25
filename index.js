const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require("./data/courseCategory.json");

app.get("/", (req, res) => {
  res.send("Funta-Learning Server is Running... 😎");
});

app.get("/course-categories", (req, res) => {
  res.send(categories);
});

app.listen(port, () => {
  console.log(`Funta-Learning Server is Running on Port ,${port}`);
});
