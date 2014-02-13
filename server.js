'use strict';
var express = require('express');
var path = require('path');

var createServer = function(port, callback) {
  var app = express();
  app.use(express['static'](path.resolve('./build')));
  app.listen(port, callback);
};

exports.createServer = createServer;

if (require.main === module) {
    createServer(3000, function() {
        console.log('Listening on port 3000');
    });
}
