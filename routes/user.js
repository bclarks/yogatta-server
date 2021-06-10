const router = require("express").Router();
const User = require("../models/User.model");
const isLoggedIn = require("../middleware/isLoggedIn");

router.get("/:username", (req, res) => {
  User.findOne({
    username: req.params.username,
  })
    .then((theUser) => {
      if (!theUser) {
        return res.status(400).json({
          errorMessage: "User doesn't exist!",
        });
      }
      return res.json({ user: theUser });
    })
    .catch((err) => {
      console.log(err);
      res.json(500).json({ errorMessage: err.message });
    });
});
