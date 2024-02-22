var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.json({ title: 'Vai curintia' });
});

/* GET home page. */
router.post('/home', function(req, res, next) {
  let body = req.body;
  body.newname = "ABC"
  body.date = new Date();
  res.json(body);
});

module.exports = router;
