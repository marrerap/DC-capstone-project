var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const db = require('./models')
// const SequelizeStore = require('connect-session-sequelize')(session.Store);
// const store = new SequelizeStore({ db: db.sequelize })
// store.sync()

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const messagesRouter =  require('./routes/messages')
const channelsRouter = require('./routes/channels')
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/v1/messages', messagesRouter);
app.use('/api/v1/channels', channelsRouter)

module.exports = app;
