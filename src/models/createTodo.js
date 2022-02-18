const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  id: String,
  body: String,
});

module.exports = mongoose.model("Todo", todoSchema);
