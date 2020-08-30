var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Welcome!",
    user: "Luis",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Felipe",
    added: new Date()
  }
];

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages:messages});
});

router.get('/new', function(req, res, next) {
  res.render('form', { title: 'New message'});
});

router.post('/new', function(req, res, next){
    messages.push({text: req.body.message, user: req.body.author, added: new Date()});
    res.redirect('/');
});

module.exports = router;
