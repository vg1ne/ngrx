const express = require('express');
const router = express.Router();

const mongoose = require('mongoose')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/ngrxApp');

var Book = require('../../server/models/book.model');

var tarzan = new Book({
  name: 'Chris',
  price: 123,
  count: 14
});

tarzan.save(function(err) {
  if (err) throw err;
  console.log('tarzan book saved successfully!');
});


router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/books', (req, res) => {
  Book.find({}, function(err, books) {
    if (err) throw err;
    res.status(200).send({data: books});
  });
});
module.exports = router;
