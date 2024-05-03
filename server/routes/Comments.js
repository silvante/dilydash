const mongoose = require("mongoose");

const commentsSchema = mongoose.Schema({
  who: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  rating: {
    type: Number,
    default: 1,
    minlength: 1,
    maxlength: 5,
  },
  comment: {
    type: String,
    maxlength: 100,
    required: true,
  },
});

module.exports = commentsSchema;
