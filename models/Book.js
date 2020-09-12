const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({

    bookName: { type: String, required: true },
    bookID: { type: String, required: true },
    authors: [{ type: String, required: true }],
    comment: [{ type: String }],
    vote: [{ type: Number }],

  
});



const Book = mongoose.model("Book", bookSchema);


module.exports = Book;