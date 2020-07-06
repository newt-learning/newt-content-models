const mongoose = require("mongoose");
const { Schema } = mongoose;

const newtContentSchema = new Schema({
  name: String,
  description: String,
  url: String,
  thumbnailUrl: String,
  type: {
    type: String,
    enum: ["book", "video"],
  },
  partOfSeries: Boolean,
  // Name, url, description fields denormalized because very unlikely to change
  series: {
    name: String,
    description: String,
    url: String,
    newtSeriesId: {
      type: Schema.Types.ObjectId,
      ref: "NewtSeries",
    },
  },
  // Name, url, description denormalized because very unlikely to change
  contentCreator: {
    name: String,
    url: String,
    description: String,
    contentCreatorId: {
      type: Schema.Types.ObjectId,
      ref: "ContentCreator",
    },
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
  videoInfo: {
    videoId: String,
    playlistId: String,
    playlistPosition: Number,
    title: String,
    description: String,
    channelId: String,
    datePublished: String,
    thumbnails: Object,
  },
});

module.exports = newtContentSchema;
