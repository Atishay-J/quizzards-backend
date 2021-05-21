const express = require("express");
const app = express();
const router = require("./Routers/quizRouter");

const fillQuizCollection = require("./utils/databaseInit");

const port = process.eventNames.PORT || 8000;

require("dotenv/config");
require("./Db/conn");

app.use(express.json());
app.use(router);

/*********************************************** 
 To Be used Once, For setting Inital Data to DB
 ***********************************************/
// fillQuizCollection();

app.get("/", (req, res) => {
  res.send("Server is live");
});

app.listen(port, () => console.log("Server Started on Port", port));
