// lib and imports
const express = require("express");
const app = express();

const myFirstCOntroller = require("./controllers/controller");

// app setup
app.use(express.json());
app.use("/static", express.static("public"));
app.set("view engine", "ejs");

// pages
app.get("/", (req, res) => {
  res.render("home.ejs");
});
app.get("/categories.ejs", (req, res) => {
  res.render("categories.ejs");
});
app.get("/questionsRandom.ejs", (req, res) => {
  res.render("questionsRandom.ejs");
});
app.get("/questionsPolitics.ejs", (req, res) => {
  res.render("questionsPolitics.ejs");
});
app.get("/questionsGeography.ejs", (req, res) => {
  res.render("questionsGeography.ejs");
});
app.get("/questionsHistory.ejs", (req, res) => {
  res.render("questionsHistory.ejs");
});
// Create here your api setup

// app.post("/api/", (req, res) => {
//   res.render("categories.ejs");
//   console.log("Hello from the brain");
// });
// app.post("/api/", (req, res) => {
//   res.render("questionsPolitics.ejs");
//   console.log("Hello from the brain");
// });

app.listen(process.env.PORT || 8080, () =>
  console.log("Server Up and running")
);
