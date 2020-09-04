var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '芝士英语' });
});
//register page
router.get('/register', function(req, res, next) {
  res.render('register', { title: '芝士英语 注册' });
});
//login page
router.get('/login', function(req, res, next) {
  res.render('login', { title: '登陆芝士英语' });
});


module.exports = router;
