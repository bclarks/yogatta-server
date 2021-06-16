const router = require("express").Router();
const User = require("../models/User.model");
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
router.get("/:username/delete", isLoggedIn, (req, res) => {
  User.findById(req.user._id)
    .then((foundUser) => {
      return User.findByIdAndDelete(foundUser._id)
        .then((deletedUser) => {
          return Session.findOneAndDelete({
            user: deletedUser._id,
          });
        })
        .catch((err) => {
          console.log(err);
          res.json(500).json({ errorMessage: err.message });
        });
    })
    .then(() => {
      console.log("We removed the session and the user!");
      res.json(true);
    })
    .catch((err) => {
      console.log(err);
      res.json(500).json({ errorMessage: err.message });
    });
});

module.exports = router;
