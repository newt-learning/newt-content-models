const mongoose = require("mongoose");
const { Schema } = mongoose;

const contentCreatorSchema = new Schema({
  name: String,
  description: String,
  url: String,
  thumbnailUrl: String,
  // References to Series
  series: [
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
  slug: {
    type: String,
    lowercase: true,
    unique: true,
  },
});

module.exports = contentCreatorSchema;
