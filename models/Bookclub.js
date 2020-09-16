var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var BookclubSchema = new Schema({
    BookclubName: {
        type: String,
        // trim: true,
        // required: "Username is Required"
      },
      BookclubBio: {
        type: String,
        // trim: true,
        // required: "Password is Required",
        // validate: [
        //   function(input) {
        //     return input.length >= 6;
        //   },
        //   "Password should be longer."
        // ]
      },

});

var Bookclub = mongoose.model("Bookclub", BookclubSchema);
module.exports = Bookclub;