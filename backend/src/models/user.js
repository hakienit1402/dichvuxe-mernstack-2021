const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
//schema
const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      require: true,
      trim: true,
      min: 3,
      max: 25,
    },
    email: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      trim: true,
      unique: true,
      min: 6,
      max: 25,
    },
    phone_number: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },
    state: {
      type: String,
      enum: ["active", "ban", "block"],
      default: "active",
    },
    role: {
      type: String,
      enum: ["user", "admin", "partner"],
      default: "user",
    },
  },
  { timestamps: true }
);

// userSchema.virtual("password").set(function (password) {
//   this.passWord = bcrypt.hashSync(password, 10);
// });
// userSchema.method = {
//   authenticate: function (password) {
//     return bcrypt.compare(password, this.passWord);
//   },
// };
module.exports = mongoose.model("User", userSchema);
