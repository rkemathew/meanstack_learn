var mongoose = require('mongoose');

module.exports = function(wagner) {
  var db = mongoose.connect('mongodb://localhost:27017/quiz');

  var Question = db.model('Question', require('./schema/question.js'), 'questions');

  wagner.factory('Question', function() {
    return Question;
  });

  var models = {
    Question: Question
  };

  return models;
};
