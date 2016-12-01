var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.get('/', function(request, response) {
  response.render('index');
});

app.get('/resume', function(request, response) {
  response.render('resume/resume');
});

app.get('/grades', function(request, response) {
  response.render('grades/grades');
});

app.get('/contact', function(request, response) {
  response.render('contact/contact');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


