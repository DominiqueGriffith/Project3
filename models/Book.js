const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({

    bookName: { type: String  },
    bookID: { type: String },
    authors: [{ type: String }],
    comment: [{ type: String }],
    vote: [{ type: Number }],

  
});



const Book = mongoose.model("Book", bookSchema);


module.exports = Book;