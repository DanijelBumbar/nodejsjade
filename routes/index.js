var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'test12' });
});
router.get('/test', function(req, res, next) {
  res.render('index', { title: 'testd' });
});

module.exports = router;
