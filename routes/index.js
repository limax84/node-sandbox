var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', {
        title: 'Express',
        dns: process.env.OPENSHIFT_APP_DNS || 'localhost:8080'
    });
});

module.exports = router;
