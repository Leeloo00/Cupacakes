var express = require('express');
var router = express.Router();

var dataCake = [
  {name: "Bleu", url:"images/bleu.jpg", price:5},
  {name: "Caramel", url:"images/caramel.jpg", price:3},
  {name: "Pistache", url:"images/chocolat-pistache.jpg", price:4},
  {name: "Fraise", url:"images/fraise.jpg", price:6},
  {name: "Fruits", url:"images/fruits.jpg", price:4},
  {name: "Choco-vanille", url:"images/vanille-chocolat.jpg", price:3},
  {name: "Citron", url:"images/citron.jpg", price:6},
  {name: "Myrtille", url:"images/myrtille.jpg", price:3}
]


var dataCakeCard = [
  {name: "Bleu", url:"images/bleu.jpg", price:5, quantity:1},
  {name: "Caramel", url:"images/caramel.jpg", price:3, quantity:2 }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { dataCake:dataCake});
 });


router.get('/shop', function(req, res, next) {
  console.log(req.query);

  dataCakeCard.push({
    name : req.query.name,
    url : req.query.url,
    price : req.query.price,
    quantity:1
  })
  res.render('shop', { dataCakeCard:dataCakeCard});
 });

 router.get('/delete-shop', function(req, res, next) {
   console.log(req.query);
   dataCakeCard.splice(req.query.position,1);
  res.render('shop', { dataCakeCard:dataCakeCard});
 });

 router.post('/update-shop', function(req, res, next) {
   var position = req.body.position;
   var newQuantity = req.body.quantity;

   dataCakeCard[position].quantity = newQuantity;

  res.render('shop', { dataCakeCard:dataCakeCard});
 });


 

module.exports = router;
