const mongoose = require("mongoose");
const { Schema } = mongoose;

const newtQuizSchema = new Schema({
  contentId: {
    type: Schema.Types.ObjectId,
    ref: "NewtContent",
  },
  questions: [
    {
      type: Schema.Types.ObjectId,
      ref: "QuizQuestion",
    },
  ],
});

module.exports = newtQuizSchema;
