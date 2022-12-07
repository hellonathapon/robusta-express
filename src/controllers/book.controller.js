const Book = require("../models/book.model");
const logger = require("../utils/logger");

const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    }catch(err) {
        logger.error(err);
        res.status(500).json({ message: "Something went wrong :(" });
    }
}

const getBookById = async (req, res) => {
    const { id } = req.params;

    try {
        const book = await Book.findById(id);
        res.status(200).json(book);
    }catch(err) {
        logger.error(err);
        res.status(500).json({ message: "Something went wrong :(" });
    }
}

module.exports = {
    getAllBooks,
    getBookById
}