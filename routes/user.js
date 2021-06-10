const router = require("express").Router();
const User = require("../models/User.model");
const Session = require("../models/Session.model");
const isLoggedIn = require("../middleware/isLoggedIn");

router.get("/:username", isLoggedIn, (req, res) => {
  User.findOne({
    username: req.params.username,
  })
    .then((foundUser) => {
      if (!foundUser) {
        return res.status(400).json({
          errorMessage: "User doesn't exist!",
        });
      }
      return res.json({ user: foundUser });
    })
    .catch((err) => {
      console.log(err);
      res.json(500).json({ errorMessage: err.message });
    });
});

module.exports = router;
