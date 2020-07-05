const mongoose = require("mongoose");
const { Schema } = mongoose;

const newtSeriesSchema = new Schema({
  name: String,
  description: String,
  url: String,
  type: {
    type: String,
    enum: ["video"],
  },
  content: [
    {
      type: Schema.Types.ObjectId,
      ref: "NewtContent",
    },
  ],
  contentCreatorId: {
    type: Schema.Types.ObjectId,
    ref: "ContentCreator",
  },
  dateAdded: Date,
  lastUpdated: Date,
});

module.exports = newtSeriesSchema;