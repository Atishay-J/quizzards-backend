const express = require("express");

const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  quizTitle: {
    type: String,
    required: true,
  },
  quizThumbnail: String,
  quizHighScore: Number,
  quizHighScorer: String,
  questions: [
    {
      question: {
        type: String,
      },
      points: {
        type: Number,
      },
      negativePoints: {
        type: Number,
      },
      options: [{ value: String, isCorrect: Boolean }],
    },
  ],
});

const Quiz = new mongoose.model("Quiz", quizSchema);
module.exports = Quiz;
