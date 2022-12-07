const router = require("express").Router();
const { getAllBooks, getBookById } = require("../controllers/book.controller");

router.get("/", getAllBooks);

router.get("/:id", getBookById);

module.exports = router;