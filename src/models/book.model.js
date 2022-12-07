const mongoose = require("mongoose");

const schema = mongoose.Schema({
    title: String,
    genre: String,
    author: String,
    publisher: String,
    ISBN: Number,
});

const Book = mongoose.model("Book", schema);

module.exports = Book;