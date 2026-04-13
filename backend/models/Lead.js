const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true, // 🔥 duplicate email रोकने के लिए
  },

  phone: {
    type: String,
  },

  course: {
    type: String,
  },

  message: {
    type: String,
  },

  // ✅ LOGIN / SIGNUP के लिए
  password: {
    type: String,
  },

}, {
  timestamps: true // 🔥 createdAt / updatedAt auto add
});

module.exports = mongoose.model("Lead", leadSchema);