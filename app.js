/**
 * Created by jamie on 10/03/2017.
 */
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var mysql = require('mysql');
var myConnection = require ('express-myconnection');
var loginRouter = require('./routers/login');

app.use(myConnection(mysql, {
    host: '192.168.56.101',
    port: 3306,
    user: 'student',
    password: 'serverSide',
    database: 'datingApp'
}, 'single'))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded ({
    extended:true
}))

// ROUTER LOGIN INCLUDE
app.use('/', loginRouter);

app.get('/profile/', function(req, res) {
    res.locals.voornaam = 'Jamie';
    res.locals.leeftijd = '26';
    res.locals.introductie = 'Hey ik ben Jamie en ik ben een student CMD'
    res.render('profile/profiel');
});

app.get('/users/user01', function(req, res) {
    res.render('users/user01');
});

app.get('/users/user02', function(req, res) {
    res.render('users/user02');
});

app.get('/users/chat01', function(req, res) {
    res.render('users/chat01');
});

app.get('/users/chat02', function(req, res) {
    res.render('users/chat02');
});

app.get('/users/fill', function(req, res) {
    res.render('users/fill');
});

app.get('/profile/settings', function(req, res) {
    res.render('profile/settings');
});

app.get('/register/register', function(req, res) {
    res.render('register/register');
});

app.get('/register/info', function(req, res) {
    res.render('register/info');
});

app.get('/error/', function(req, res) {
    res.render('error/error');
});

app.get('/admin/', function(req, res) {
    res.render('admin/admin');
});

app.get('/users/block', function(req, res) {
    res.render('users/block');
})

app.listen(3000, function() {
    console.log('Webserver gestart op poort 3000');
});