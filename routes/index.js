const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.json("All good in here");
});
const authRoutes = require("./auth");
router.use("/auth", authRoutes);

const userRoutes = require("./user");
router.use("/user", userRoutes);

const profileRouter = require("./profile");
router.use("/profile", profileRouter);

module.exports = router;
