require("dotenv").config();
const express = require("express");

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.status(200);
  res.send("Halo Bang....!");
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT} `);
});
