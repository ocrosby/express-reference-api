const express = require('express');
const connectDB = require('./src/config/database');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const createError = require('http-errors');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');

const indexRouter = require('./src/routes/index');
const itemsRouter = require('./src/routes/items');
const kubernetesRouter = require('./src/routes/kubernetes');

// Load environment variables
require('dotenv').config();

const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();

// Swagger setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/items', itemsRouter);
app.use('/', kubernetesRouter);

// Use configuration settings
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}\nhttp://${process.env.HOST}:${port}/api-docs`);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;