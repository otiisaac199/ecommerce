const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/user.model");

// register
const registerUser = async (req, res) => {
  const { userName, email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user) {
      res.status(400).json({ success: false, message: "User already Exist" });
    }

    const salt = bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ userName, email, password: hashPassword });

    await newUser.save();
    res.status(200).json({ sucess: true, message: "Registration Successful" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal Server Error " });
  }
};

// login
const login = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal Server Error " });
  }
};

// logout

// auth middleware

module.exports = { registerUser };
