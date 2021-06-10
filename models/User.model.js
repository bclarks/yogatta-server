const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    required: true,
    type: String,
  },
  savedVideos: [{ type: Schema.Types.ObjectId, ref: "Video" }],
});

const User = model("User", userSchema);

module.exports = User;
