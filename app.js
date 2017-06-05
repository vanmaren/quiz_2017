
//Importar MWs utilizados compatibles con express
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var partials = require('express-partials');
var flash = require('express-flash');
var methodOverride = require('method-override');

//Importa router indez del directorio ./routes
var index = require('./routes/index');
var app = express();

// view engine setup Define views como directorio de vistas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); //instala reenderizador de vistas EJS

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json()); // Instalar MWS que procesan  partes de req o res
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({secret: "Quiz 2017",
    resave: false,
    saveUninitialized: true}));
app.use(methodOverride('_method', {methods: ["POST", "GET"]}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(partials());
app.use(flash());

// Helper dinamico:
app.use(function(req, res, next) {

    // Hacer visible req.session en las vistas
    res.locals.session = req.session;

    next();
});

app.use('/', index);
//si ejecucion llega a este MW quiere decir
//que ningun MW anterior ha entendido la ruda
//y que hay que enviar respuesta 404 NotFound
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler, seinvoca con next(err)
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page, si ningun mW ha
    //definido codigo de resuesta el 500, servidor
    res.status(err.status || 500);
    res.render('error');
    // se reenderiza la vista de respuesta de errores
});

module.exports = app;