var express = require('express');
var http = require('http');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var swaggerUi = require('swagger-ui-express');
var swaggerDoc = require('./swagger.json');
var helmet = require('helmet');
var cors = require('cors');

var corsOption = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders: ['x-auth-token']
};

var app = express();

app.use(cors(corsOption));
app.use(helmet())
app.use(logger('dev'));
app.use(express.json());
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'uploads')));
mongoose.set('useFindAndModify', false);


var usersRouter = require('./routes/users');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use('/users', usersRouter);


// error handler
// app.use(function(err, req, res, next) {
  //   // set locals, only providing error in development
  //   res.locals.message = err.message;
  //   res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  //   // render the error page
  //   res.status(err.status || 500);
  //   res.render('error');
  // });
  
  //MongoDB database
  const dbRoute =
  'mongodb://demo:pwdemo@192.168.10.9:27017/demo';
  
	
  // connects our back end code with the database
  mongoose.connect(dbRoute, { useNewUrlParser: true });
  
  let db = mongoose.connection;
  
  db.once('open', () => console.log('connected to the database'));
  
  // checks if connection with the database is successful
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  
  
  
  
  var port = process.env.PORT || 4000;

var server = http.createServer(app);


server.listen(port);


module.exports = app;
