const mongoose = require("mongoose");
const ApiError = require("../error/apiError");
const Book = require("../models/book.model");
const logger = require("../utils/logger");

const getAllBooks = async (req, res, next) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    }catch(err) {
        next(err);
    }
}

const getBookById = async (req, res, next) => {
    const { id } = req.params;

    try {
        const book = await Book.findById(id);
        res.status(200).json(book);
    }catch(err) {
        next(err);
    }
}

const insertNewBook = async (req, res, next) => {
    
    const { title, genre, author, publisher, ISBN } = req.body;

    if(!(title && genre && author && publisher && ISBN)) {
        next(ApiError.badRequest("Invalid credentials!"));
        return;
    }

    try {
        const result = await Book.create({title, genre, author, publisher, ISBN});
        console.log(result);
        res.status(201).json({message: "Inserted new Book!"});
    }catch(err) {
        next(err);
    }
}


const deleteBook = async (req, res, next) => {

    const { id } = req.params;

    // 1: no param id
    // TODO: regex id to scope the range of error.
    if(!id) {
        next(Api.badRequest("Invalid credentials!"));
        return;
    }

    try {
        // 2: no match id in db
        const result = await Book.findByIdAndDelete(id);
        console.log(result);

        if(!result) {
            next(ApiError.badRequest("No book with specify ID"));
            return;
        }
        res.status(200).json({message: "Deleted successfully"});

    }catch(err) {
        // 3: internal error
        next(err);
    }


}

module.exports = {
    getAllBooks,
    getBookById,
    insertNewBook,
    deleteBook,
}