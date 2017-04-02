/**
 * Created by jamie on 30/03/2017.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('index');
});

router.post('/', function(req, res) {
    //req.session.email = req.body.email;

    req.getConnection(function (err, connection) {
        if (err) {
            console.log("Can't connect to database");
        }
        else {
            console.log('Connection established');
        }

        var query = connection.query('SELECT * FROM user WHERE email=?', [req.body.email], function (err, result) {
            console.log(result);
            if (err) {
                console.log('error');
            }

            if (result[0] && result[0].password == req.body.wachtwoord) {
                res.redirect('profile/');
            }

            else {
                res.send('Kan niet');
                //res.redirect('/');
            }
        });
    });
});

module.exports = router;