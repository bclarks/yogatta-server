const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  body: {
    type: String,
    required: true,
  },
});

const Comment = model("Comment", commentSchema);

module.exports = Comment;
