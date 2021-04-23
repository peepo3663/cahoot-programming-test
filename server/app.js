var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var initModels = require("./models/init-models");
var Sequelize = require('sequelize');
let cors = require('cors');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

// setup database connection
const sequelize = new Sequelize('StackOverflow', 'sa', '#myPass123', {
  host: 'localhost',
  dialect: 'mssql',
  port: 1433,
  dialectOptions: { connectTimeout: 30000 },
  pool: {
    max: 10,
    min: 0,
    idle: 10000
  }
})

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.')
}).catch(error => {
  console.error('Unable to connect to the database:', error)
})

let models = initModels(sequelize)
let apiRouter = require('./routes/api')(models, sequelize)
app.use('/api', apiRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
