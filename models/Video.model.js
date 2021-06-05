const { Schema, model } = require("mongoose");

const videoModel = new Schema({
  url: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  ratings: [
    {
      type: Schema.Types.ObjectId,
      ref: "Rating",
    },
  ],
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});
const Video = model("Video", videoModel);
module.exports = Video;
