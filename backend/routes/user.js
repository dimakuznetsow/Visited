const express = require("express");

const {
  loginUser,
  signupUser,
  forgotPassword,
  resetPassword,
} = require("../controllers/userController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// login route
router.post("/login", loginUser);

// sign up route
router.post("/signup", signupUser);

// forgot password
router.post("/forgot", forgotPassword);

router.patch("/reset/:resetToken", resetPassword);

module.exports = router;
