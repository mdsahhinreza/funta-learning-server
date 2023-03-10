const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require("./data/courseCategory.json");
const courses = require("./data/courses.json");

app.get("/", (req, res) => {
  res.send("Funta-Learning Server is Running... 😎");
});

app.get("/course-categories", (req, res) => {
  res.send(categories);
});

app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourse = courses.find((co) => co.course_id === id);
  res.send(selectedCourse);
});

app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  const categoryCourse = courses.filter((co) => co.category_id === id);
  res.send(categoryCourse);
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.listen(port, () => {
  console.log(`Funta-Learning Server is Running on Port ,${port}`);
});
