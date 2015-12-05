var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/reg', function(req, res, next) {
  res.render('user/reg',{});
});

router.post('/reg', function(req, res, next) {
  res.send('注册');
});

router.get('/login', function(req, res, next) {
  res.render('user/login',{});
});

router.post('/login', function(req, res, next) {
  res.send('注册');
});

router.get('/logout', function(req, res, next) {
  res.send('退出');
});

module.exports = router;
