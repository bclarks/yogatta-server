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

  // email: {
  //   type: String,
  //   unique: true,
  //   required: true,
  // },
  profilePic: {
    type: String,
    default:
      "https://media-exp1.licdn.com/dms/image/C561BAQFRtLf5GqErTw/company-background_10000/0/1570730811895?e=2159024400&v=beta&t=PzFlDGJ6h-Mt_n4W3HZwYO324_0Q78hE6JoMKBN7EAw",
  },
  savedVideos: [{ type: Schema.Types.ObjectId, ref: "Video" }],
});

const User = model("User", userSchema);

module.exports = User;
