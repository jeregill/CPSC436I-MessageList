const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const usersRouter = require('./routes/Users');
const postsRouter = require('./routes/Posts');

const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox-a3hj6.mongodb.net/MessageListApp?retryWrites=true&w=majority"

let app;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
    .then(() => {
      console.log("MongoDB Connected…");
      app = express();

// view engine setup
      app.set('views', path.join(__dirname, 'views'));
      app.set('view engine', 'jade');
      app.use(bodyParser.json());
      app.use(logger('dev'));
      app.use(express.json());
      app.use(express.urlencoded({ extended: false }));
      app.use(cookieParser());
      app.use(express.static(path.join(__dirname, 'public')));

      app.use(cors());
      app.use('/users', usersRouter);
      app.use('/posts', postsRouter);

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

      app.listen(9000, () => {
          console.log('Server has started...')
      })

    })
    .catch(err => console.log(err));

// const app = express();
//
// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
//
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
//
// app.use(cors());
// app.use('/users', usersRouter);
// app.use('/posts', postsRouter);
//
// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });
//
// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });
//
// module.exports = app;
