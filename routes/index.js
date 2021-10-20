var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    color: "#FFFFFF"
  });
});

module.exports = router;
router.post('/', function(req, res, next) {
  res.render('index', {
    color: req.body.colorPicker

  })
});
function generateRandomHexCode(){
  let hexCode = "#"
  while ( hexCode.length < 7 ){
    hexCode += (Math.round(Math.random()*15)).toString(16)
  }
  return hexCode
}
router.post('/random', function(req, res, next) {
  res.render('index', {
    color: generateRandomHexCode(),
    textColor: generateRandomHexCode()
  })
});