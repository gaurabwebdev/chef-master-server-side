const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const cors = require("cors");
const chefs = require("./data/chefs.json");
const qna = require("./data/qna.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello Chef");
});
app.get("/chefs", (req, res) => {
  res.send(chefs);
});
app.get("/qna", (req, res) => {
  res.send(qna);
  // res.send(recipeDetails);
});

app.listen(port, () => {
  console.log(`The site is running on ${port}`);
});
