var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var flash           = require('connect-flash');
const helmet        = require('helmet');
const passport= require('passport');
const session =require('express-session');
const localStrategy=require('passport-local').Strategy;
//references added
const mongoose      = require('mongoose');
const config        = require('./config/global');

var indexRouter = require('./controllers/index');
var usersRouter = require('./controllers/users');
var coursesRouter =require('./controllers/courses');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(flash());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//use helmet
app.use(helmet());

//db connection
mongoose.connect(config.db, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true  });
//passport config
app.set('trust proxy',1);
app.use(session({
  secret: 'escAndGC',
  name:'ESCSessionId',
  resave: false,
  saveUninitialized: false,
  // cookie: { secure: true },
  // maxAge: 2000
}));



app.use(passport.initialize());
app.use(passport.session());

const User = require('./models/user');
passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/courses',coursesRouter)
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
