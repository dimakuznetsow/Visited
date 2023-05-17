const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require("../models/userModel");
const transporter = require("../config/email");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

// login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// signup user
const signupUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.signup(name, email, password);
    const token = createToken(user._id);

    res.status(200).json({ name, email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// reset password

const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.forgot(email);
    user.resetToken = jwt.sign({ userId: user._id }, process.env.SECRET, {
      expiresIn: "1h",
    });

    const { resetToken } = await user.save();

    const FRONTEND_URL = "https://visited.onrender.com/";

    const mailOptions = {
      from: "d.kuznetsov.fullstack@example.com",
      to: email,
      subject: "Password reset token",
      text: `If you want to reset your password click here: ${FRONTEND_URL}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(200).json({ message: "Reset token sent", user });
        console.log(resetToken);
      }
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const resetPassword = async (req, res) => {
  const { password } = req.body;
  const resetToken = req.params.resetToken;

  try {
    const decoded = jwt.verify(resetToken, process.env.SECRET);

    const user = await User.findById(decoded.userId);

    if (!user) {
      throw new Error("Invalid reset token");
    }

    // Update the user's password and reset the resetToken field
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    user.password = hash;
    user.resetToken = null;

    await user.save();

    res.status(200).json({ message: "Password reset successful" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  loginUser,
  signupUser,
  forgotPassword,
  resetPassword,
};
