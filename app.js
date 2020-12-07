"use strict";
// //Bringing in a dotenv package.
if(process.env.NODE_ENV !== "production") {
  require("dotenv").config();
};
//importing packages
const express = require('express');
const app = express();
const ejs = require('ejs');
const connect = require('connect');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const session = require('express-session');
const favicon = require('serve-favicon');
const logger = require('morgan');
const debug = require('debug');
const cors = require('cors');
const path = require('path');
const passport = require('passport');
const expressLayouts = require('express-ejs-layouts');
//setting up a server.
app.set('port', process.env.PORT || 3000);
const server = app.listen(app.get('port'), () => {
  debug('Server listening on port ' + server.address().port);
});
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`));
//inporting modules
const homeRoutes = require('./routes/index.js');
const activitiesRoute = require('./routes/activities.js');
const travelsRoute = require('./routes/travels.js');
//const authRoute = require('./routes/users.js');

//setting up a view engine
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('layout','layouts/layout');

//configuring middlewares
app.use(expressLayouts);
app.use(logger('dev'));
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
//......................
// app.use(cookieSession({
//   name: 'session',
//   keys: [process.env.SESSION_SECRET],
//
//   // Cookie Options
//   maxAge: 24 * 60 * 60 * 1000 // 24 hours
// }));
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));
//=====================================================================
//flash messages set up
//instatiating inported modules
app.use('/', homeRoutes);
//app.use('/auth', authRoute);
app.use('/travel', travelsRoute);
app.use('/activities', activitiesRoute);

//error handling
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    let err = new Error('Not Found');
    console.log(err);
    err.status = 404;
    next(err);
});

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
      console.log(err);
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
