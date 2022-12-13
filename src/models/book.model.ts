import mongoose, { Schema } from "mongoose";

const schema = new Schema({
    title: String,
    genre: String,
    author: String,
    publisher: String,
    ISBN: Number,
});

const Book = mongoose.model("Book", schema);

export default Book;