const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const index = require('./routes/index');
const flickr = require('./routes/flickr');

const app = express();

app.use(favicon(path.join(__dirname, 'client/build', 'favicon.ico')));
app.use(logger('dev'));
// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/', index);
app.use('/flickr', flickr);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    //TODO Implement error.html
    res.render('index.html');
});

module.exports = app;
