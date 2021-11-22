const express = require('express');
const app = express();

app.get("/", function (req,res) {
  res.send("<h1>hello world</h1>");
});

app.get("/contact", function (req,res) {
  res.send("<h1>Contact me at felipe@hotmail</h1>");
});

app.get("/about", function (req,res) {
  res.send("<h1>Im 28 years old</h1>");
});

app.get("/hobbies", function (req,res) {
  res.send("<ul><li>golf</li><li>fubol</li></ul>");
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
