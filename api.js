var express = require('express');

module.exports = function(wagner) {
  var api = express.Router();

  api.get('/', function(req, res) {
    res.send('Hello World');
  });

  api.get('/question', wagner.invoke(function(Question) {
    return function(req, res) {
      Question.find({}, function(err, docs) {
        res.send(JSON.stringify(docs));
      });
    };
  }));

  api.get('/question/:id', wagner.invoke(function(Question) {
    return function(req, res) {
      Question.findOne({ _id: req.params.id }, function(err, docs) {
        res.send(JSON.stringify(docs));
      });
    };
  }));

   return api;
};
