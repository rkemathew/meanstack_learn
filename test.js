var assert = require('assert');
var superagent = require('superagent');
var status = require('http-status');
var express = require('express');
var wagner = require('wagner-core');

var URL_ROOT = 'http://localhost:3000';

describe('Question API', function() {
  var server;

  before(function() {
    var app = express();

    models = require('./models')(wagner);
    app.use(require('./api')(wagner));

    server = app.listen(3000);
  });

  after(function() {
    server.close();
  });

  it('can load the root url', function(done) {
    var url = URL_ROOT + "/";
    superagent.get(url, function(err, res) {
      assert.ifError(err);
      assert.equal(res.status, status.OK);
      assert.equal(res.text, "Hello World");
      done();
    });
  });
});
