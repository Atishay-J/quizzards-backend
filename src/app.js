const express = require("express");
const app = express();

const port = process.eventNames.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Server is live");
});

app.listen(port, () => console.log("Server Started on Port", port));
