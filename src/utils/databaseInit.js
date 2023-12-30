const Quiz = require("../models/quizModel");
const quizData = require("../../quizData");

// Use this to set Initial data to DB

const fillQuizCollection = () => {
  quizData.forEach(async (quizData) => {
    try {
      const newQuizData = new Quiz(quizData);
      const insertedQuizData = await newQuizData
        .save()
        .then(console.log("New Quiz Data added to DB"));
    } catch (err) {
      res.status(500).send(err);
      console.log("Error while adding new quiz data to DB", err);
    }
  });
};

module.exports = fillQuizCollection;
