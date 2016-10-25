var express = require('express');
var wagner = require('wagner-core');

var models = require('./models')(wagner);

var app = express();

app.use('/', require('./api')(wagner));

app.listen(3000);

/*
var testQuestion = new models.Question({
  question: "Who is the president of the United States",
  options: [
    { option: "Abe Shinto", isCorrect: false },
    { option: "Vladimir Putin", isCorrect: false },
    { option: "Barack Obama", isCorrect: true },
    { option: "Benjamin Netanyahu", isCorrect: false },
  ]
});

testQuestion.save(function(err, testQuestion) {
  if (err) {
    console.log("Error saving the question");
  } else {
    console.log("Test Question Saved.\n" + JSON.stringify(testQuestion));
  }
});
*/
