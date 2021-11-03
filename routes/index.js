var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/push', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/origin/*', function(req, res, next) {
  res.json({ok:true});
});
module.exports = router;
