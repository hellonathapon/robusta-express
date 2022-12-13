import express from "express";
import { getAllBooks, getBookById, insertNewBook, deleteBook } from "../../controllers/book.controller";
const BookRouter = express.Router();

BookRouter.get("/", getAllBooks);

BookRouter.get("/:id", getBookById);

BookRouter.post("/", insertNewBook);

BookRouter.delete("/:id", deleteBook);

export default BookRouter;