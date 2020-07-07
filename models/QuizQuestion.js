const mongoose = require("mongoose");
const { Schema } = mongoose;

const questionSchema = new Schema({
  question: String,
  options: [
    {
      _id: false,
      option: String,
      // Explanation/more details for a particular option. Used to explain why
      // a particular answer is right or wrong.
      explanation: String,
    },
  ],
  correctAnswer: String,
});

module.exports = questionSchema;
