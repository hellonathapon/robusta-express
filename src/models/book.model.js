const mongoose = require("mongoose");

const schema = mongoose.Schema({
    bID: String,
    title: String,
    genres: String,
    author: String,
    published_date: String,
    ISBN: Number,
});

const Book = mongoose.model("Book", schema);

module.exports = Book;