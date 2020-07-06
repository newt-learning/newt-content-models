const mongoose = require("mongoose");
const { Schema } = mongoose;

const newtSeriesSchema = new Schema({
  name: String,
  description: String,
  url: String,
  thumbnailUrl: String,
  type: {
    type: String,
    enum: ["series"],
  },
  contentType: {
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
  // Name denormalized because very unlikely to change
  source: {
    name: String,
    mediaId: String,
    sourceId: {
      type: Schema.Types.ObjectId,
      ref: "Source",
    },
  },
  dateAdded: Date,
  lastUpdated: Date,
  seriesInfo: {
    playlistId: String,
    title: String,
    description: String,
    channelId: String,
    datePublished: Date,
    thumbnails: Object,
  },
});

module.exports = newtSeriesSchema;
