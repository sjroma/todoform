var express = require('express');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

// Create app
var app = express();

// Set app to use bodyParser()` middleware.
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
//'extended: false' parses strings and arrays.
//'extended: true' parses nested objects
//'expressValidator' must come after 'bodyParser', since data must be parsed first!
//app.use(expressValidator());

//Listening on root

var html = '<form action="/" method="post">' + 
             '<h1>Stuff to do...</h1>' + 
             '<input type="text" name="what" placeholder="Add a todo...">' + 
             '<button type="submit">Add</button>' + 
             '<p><ul><button type="submit">Mark as complete</button></ul></p>' + 
             '<h2>Completed tasks</h2>' + 
             '</form>';

app.get('/', function (req, res) {
  res.send('check out localhost:3000/todo'); //if user doesn't know about todo this will direct them
});

app.get('/todo', function(req, res){
  // Set 'action' to '/'

  res.send(html);
});

// Receives data from form (action='/')
// 'req.body' now contains form data.
//app.post("/", function (req, res) {
//  todos.push(req.body.todo);
//  res.redirect('/');
//})
  
app.listen(3000, function(){
  console.log('Started express-todoform application!')
});
