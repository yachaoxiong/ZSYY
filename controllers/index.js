var express = require('express');
var router = express.Router();
const passport= require('passport');
let User=require('../models/user');
//access auth check method in our global functions file
const functions=require('../config/functions');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '芝士英语',user:req.user });
});
//register page
router.get('/register', function(req, res, next) {
  res.render('register', { title: '芝士英语 注册',Rerr:req.flash('Rerr') });
});
//register page
router.post('/register', async (req, res, next) => {
  if(!req.body.username){req.flash('Rerr','手机号不能空');res.redirect('/register')}
  if(req.body.password!=req.body.confirm){req.flash('Rerr','请输入相同密码');res.redirect('/register')}
  let user=await User.findOne({username:req.body.username});
  if(user){req.flash('Rerr','该号码已经被注册！');res.redirect('/register')}
    User.register(new User({
      username: req.body.username,
      nickName:req.body.nickName,
  }), req.body.password, (err, user) => {
      if (err) {
          console.log(err);
      } else {
          res.redirect('/');
      }
  });
});
//login page
router.get('/login', function(req, res, next) {
  res.render('login', { title: '登陆芝士英语',error:req.flash('error') });
});
// POST: /login
router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: '账号密码错误.',
}));
// GET: /logout
router.get('/logout', (req, res, next) => {

    // clear out any session messages
    req.session.messages = [];

    // end the user's session
    req.logout();

    // redirect to login or home
    res.redirect('/login');
});
router.get('/profile',functions.isLoggedIn,(req,res,next)=>{
  res.render('profile', {
      title: '个人信息' ,
      user:  req.user
  });
})
module.exports = router;
