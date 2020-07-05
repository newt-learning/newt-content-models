const mongoose = require("mongoose");
const { Schema } = mongoose;

const contentCreatorSchema = new Schema({
  name: String,
  description: String,
  url: String,
  // References to Series
  newtSeries: [
    {
      type: Schema.Types.ObjectId,
      ref: "NewtSeries",
    },
  ],
  // References to Individual content
  individualContent: [
    {
      type: Schema.Types.ObjectId,
      ref: "NewtContent",
    },
  ],
  sourceId: {
    type: Schema.Types.ObjectId,
    ref: "Source",
  },
  dateAdded: Date,
  lastUpdated: Date,
});

module.exports = contentCreatorSchema;
