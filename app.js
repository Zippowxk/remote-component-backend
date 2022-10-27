var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', indexRouter);

let options = {
  setHeaders: function (res, path, stat) {
    res.set('Access-Control-Allow-Origin', '*')
  }
}
app.use(express.static(path.join(__dirname, 'vue-components'),options));

app.get('/simulate',function (req, res) {
  res.set('Access-Control-Allow-Origin', '*')
  res.json({
    data: [
      {
        url: 'http://localhost:3000/HelloWorld.js',
        payload: 'this is a remote component',
      },
      {
        url: 'http://localhost:3000/HelloWorld.js',
        payload: 'payload2',
      },
      {
        url: 'http://localhost:3000/HelloWorld.js',
        payload: 'payload3',
      },
      {
        url: 'http://localhost:3000/Foo.js',
        payload: undefined
      }
    ],
    code: 200
  })
})
// app.get('/simulate',function (req, res) {
//   res.set('Access-Control-Allow-Origin', '*')
//   res.json({
//     data: { 
//       HelloWorld:  {
//         url: 'http://localhost:3000/HelloWorld2.js',
//         payload: 'this is a remote component',
//       },
//       Foo: {
//         url: 'http://localhost:3000/Foo.js',
//         payload: undefined
//       }
//     },
//     code: 200
//   })
// })
// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

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
