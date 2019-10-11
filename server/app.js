var createError = require('http-errors');
var express = require('express');
var http = require('http');
const http2 = require('http2');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var swaggerUi = require('swagger-ui-express');
var swaggerDoc = require('./swagger.json');
var helmet = require('helmet');


var app = express();

app.use(helmet())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'uploads')));
mongoose.set('useFindAndModify', false);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
// app.use(function(err, req, res, next) {
  //   // set locals, only providing error in development
  //   res.locals.message = err.message;
  //   res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  //   // render the error page
  //   res.status(err.status || 500);
  //   res.render('error');
  // });
  
  // this is our MongoDB database
  const dbRoute =
  'mongodb://demo:pwdemo@192.168.10.9:27017/demo';
  
	
  // connects our back end code with the database
  mongoose.connect(dbRoute, { useNewUrlParser: true });
  
  let db = mongoose.connection;
  
  db.once('open', () => console.log('connected to the database'));
  
  // checks if connection with the database is successful
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  
  
  
  
  
  
  
  var port = 3000;


/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);

/**
 * Normalize a port into a number, string, or false.
 */



module.exports = app;
