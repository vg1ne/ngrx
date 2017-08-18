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
// Book.find(function(err, books) {
//   books.forEach(function(book) {
//     book.bought = 0;
//     book.save();
//   });
// });

router
  .get('/books', (req, res) => {
    Book.find({}, function (err, books) {
      if (err) throw err;
      res.status(200).send({data: books});
    });
  })
  .post('/books', (req, res) => {
    addBook(req.body)
    res.status(200).send();
  })
  .put('/books', (req, res) => {
    Book.findByIdAndUpdate(req.body._id, req.body)
    res.status(200).send();
  })
  .delete('/books', (req, res) => {
    Book.remove({_id: req.query.id},
      function(err) {
        if (err)
          res.send(err);
        res.status(200).send();
      })
  });

module.exports = router;

function addBook(book) {
  let bookItem = new Book({
    name: book.name,
    price: book.price,
    count: book.count,
    bought: book.bought
  });

  bookItem.save(function (err) {
    if (err) throw err;
  });
}
