const User = require("../models/user");
const jwt = require("jsonwebtoken");
exports.signup = (req, res) => {
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (user)
      return res.status(400).json({
        message: "User already registered!",
      });
    const { fullname, email, phone_number, address, password } = req.body;
    const _user = new User({
      fullname,
      email,
      phone_number,
      address,
      password,
    });

    _user.save((err, data) => {
      if (err) {
        return res.status(400).json({
          message: "Some thing went wrong",
        });
      }
      if (data) {
        return res.status(201).json({
          user: data,
        });
      }
    });
  });
};
exports.signin = (req, res) => {
  User.findOne({ email: req.body.email }).exec((err, user) => {
    if (err) return res.status(400).json({ err });
    if (user) {
      if (user.password===req.body.password) {
        const token = jwt.sign({ _id: user._id }, "fake-token", {
          expiresIn: "1h",
        });
        const { fullname, email, address, phone_number, state,role } = user;
        res.status(200).json({
          token,
          userData: {
            fullname,
            email,
            role,
            address,
            phone_number,
            state,
            role
          },
        });
      } else {
        return res.status(400).json({
          message: "Invalid password!",
        });
      }
    } else {
      return res.status(400).json({
        message: "Something went wrong",
      });
    }
  });
};
