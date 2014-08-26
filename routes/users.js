var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
    res.send('respond with a resource');
});

/* GET users listing. */
router.get('/test', function(req, res) {
    res.send('respond with a resource test');
});

module.exports = router;
