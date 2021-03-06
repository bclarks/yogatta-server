const { Schema, model } = require("mongoose");

const ratingSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  rating: {
    requires: true,
    type: Number,
  },
});

const Rating = model("Rating", ratingSchema);

module.exports = Rating;
