
var mongoose = require('mongoose');

var questionSchema = ({
  question: { type: String, required: true },
  options: [{
      option: { type: String, required: true },
      isCorrect: { type: Boolean, required: true }
  }]
});

module.exports = new mongoose.Schema(questionSchema);
module.exports.questionSchema = questionSchema;
