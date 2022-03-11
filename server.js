/* server.js */
var app = require('express')();
var http = require('http').Server(app);
var serveStatic = require('serve-static');

// Serve all files of the root directory
app.use(serveStatic('.', {'index': ['index.html']}));

// Listen on port 3000
http.listen(process.env.PORT || 3000, function(){
  console.log('listening on 0.0.0.0:3000');
});