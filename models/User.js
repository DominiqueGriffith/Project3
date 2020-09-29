var mongoose = require("mongoose");
const bcrypt = require('bcrypt')

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true

    // trim: true,
    // required: "Username is Required"
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,

    required: true
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

UserSchema.pre("save", function (next) {
  if (!this.isModified("password")){
    return next()
  }
  this.password = bcrypt.hashSync(this.password,10)
  next()
})

//compare password
UserSchema.methods.comparePassword = function (plainText,callback){
  return callback(null,bcrypt.compareSync(plainText, this.password))
}

const userModel = mongoose.model("user", UserSchema)

var User = mongoose.model("User", UserSchema);
module.exports = User;

module.exports = userModel