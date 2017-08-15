const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/ngrxApp');

const Book = require('../../server/models/book.model');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// var tarzan = new Book({
//   name: 'Chris',
//   price: 123,
//   count: 14
// });
//
// tarzan.save(function(err) {
//   if (err) throw err;
//   console.log('tarzan book saved successfully!');
// });

router
  .get('/books', (req, res) => {
    Book.find({}, function (err, books) {
      if (err) throw err;
      res.status(200).send({data: books});
    });
  }).post('/books', (req, res) => {
    console.log(req.body)
    addBook(req.body)
  res.status(200).send();
});
module.exports = router;

function addBook(book) {
  let bookItem = new Book({
    name: book.name,
    price: book.price,
    count: book.count
  });

  bookItem.save(function (err) {
    if (err) throw err;
  });
}
