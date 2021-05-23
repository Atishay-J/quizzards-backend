const express = require("express");

const router = new express.Router();

const Quiz = require("../models/quizModel");

router.post("/createQuiz", async (req, res) => {
  try {
    const quizData = new Quiz(req.body);
    const insertedQuizData = await quizData
      .save()
      .then(console.log("Quiz Data saved in DB"));
    res.status(201).send(insertedQuizData);
  } catch (err) {
    res.send(err);
  }
});

router.get("/quizData", async (req, res) => {
  try {
    const quizData = await Quiz.find({});
    res.send(quizData);
  } catch (error) {
    res.send(error);
  }
});

router.get("/test", (req, res) => {
  res.send("Router Is Working");
});

module.exports = router;
