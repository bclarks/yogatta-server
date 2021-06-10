const router = require("express").Router();
const User = require("../models/User.model");
const isLoggedIn = require("../middleware/isLoggedIn");

router.put(`/update`, isLoggedIn, (req, res) => {
  const { username, email } = req.body;

  if (username.length < 8) {
  }
  User.find({ $or: [{ username }] }).then((allUsers) => {
    const allNotMe = allUsers.filter(
      (eachUser) => eachUser._id.toString() !== req.user._id.toString()
    );
    if (allNotMe.length) {
      // OPPSIE, WE CAN'T UPDATE
    }

    User.findByIdAndUpdate(req.user._id, { username }, { new: true }).then(
      (newUsername) => {
        res.json({ user: newUsername });
      }
    );
  });
});

module.exports = router;
