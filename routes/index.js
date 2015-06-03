var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'JSON prettyprint' });
});

router.post('/', function(req, res, next) {
    var data = JSON.parse(req.body.data);

    res.set('Content-Type', 'application/json');
    res.send(JSON.stringify(data, null, '  '));
});

module.exports = router;
