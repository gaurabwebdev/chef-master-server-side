const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const cors = require("cors");
const chefs = require("./data/chefs.json");
const recipeDetails = require("./data/recipes.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello Chef");
});
app.get("/chefs", (req, res) => {
  res.send(chefs);
});
app.get("/chefs/:id", (req, res) => {
  const chefId = req.params.id;
  const currentChef = chefs.find((recipe) => recipe.id === parseInt(chefId));
  res.send(currentChef);
  // res.send(recipeDetails);
});

app.listen(port, () => {
  console.log(`The site is running on ${port}`);
});
