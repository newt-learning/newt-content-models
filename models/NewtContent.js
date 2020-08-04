const mongoose = require("mongoose");
const { Schema } = mongoose;
const { slugify } = require("../helpers");

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
  // Name, url, description, slug denormalized because very unlikely to change
  contentCreator: {
    name: String,
    url: String,
    description: String,
    slug: String,
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
  quizId: {
    type: Schema.Types.ObjectId,
    ref: "NewtQuiz",
  },
  dateAdded: Date,
  lastUpdated: Date,
  slug: {
    type: String,
    lowercase: true,
    unique: true,
  },
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

newtContentSchema.pre("save", function (next) {
  this.slug = slugify(this.name);
  next();
});

module.exports = newtContentSchema;
