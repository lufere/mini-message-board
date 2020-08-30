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

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages:messages});
});

module.exports = router;
