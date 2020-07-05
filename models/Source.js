const mongoose = require("mongoose");
const { Schema } = mongoose;

const availableContentSchema = new Schema(
  {
    mediaId: String,
    contentId: {
      type: Schema.Types.ObjectId,
      ref: "NewtContent",
    },
  },
  { _id: false }
);

const sourceSchema = new Schema({
  name: String,
  description: String,
  url: String,
  availableContent: [availableContentSchema],
  dateAdded: Date,
  lastUpdated: Date,
});

module.exports = sourceSchema;
