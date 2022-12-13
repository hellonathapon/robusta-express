const router = require("express").Router();
const { getAllBooks, getBookById, insertNewBook, deleteBook } = require("../../controllers/book.controller");

router.get("/", getAllBooks);

router.get("/:id", getBookById);

router.post("/", insertNewBook);

router.delete("/:id", deleteBook);

module.exports = router;