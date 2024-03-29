require("dotenv").config();
const express = require("express");
const app = express();

app.route("/").get((req, res) => {
  res.send("Hello World");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
