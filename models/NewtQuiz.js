const mongoose = require("mongoose");
const { Schema } = mongoose;

const questionSchema = new Schema({
  question: String,
  options: [
    {
      option: String,
      // Explanation/more details for a particular option. Used to explain why
      // a particular answer is right or wrong.
      explanation: String,
    },
  ],
  correctAnswer: String,
});

const newtQuizSchema = new Schema({
  contentId: {
    type: Schema.Types.ObjectId,
    ref: "NewtContent",
  },
  questions: [questionSchema],
});

module.exports = newtQuizSchema;
