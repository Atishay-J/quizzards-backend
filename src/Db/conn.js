const mongoose = require("mongoose");

const URI = process.env.DB_URI;

mongoose
  .connect(URI, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Connected To Database"))
  .catch((error) => console.log("Error While Connecting to DB", error));
