const mongoose = require("mongoose");
const bcrypt = require('bcrypt')

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true

  },

  // username: {
  //   type: String,
  //   unique: true,
  //   required: true

  // },
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
   // Check if document is new or a new password has been set
  if (!this.isModified("password")) {
    
       // Saving reference to this because of changing scopes
    return next()
  }
  this.password = bcrypt.hashSync(this.password, 10)
  next()
})

//compare password
// UserSchema.methods.comparePassword = function (plainText, callback) {
//   return callback(null, bcrypt.compareSync(plainText, this.password))
// }

UserSchema.methods.isCorrectPassword = function(password, callback){
  bcrypt.compare(password, this.password, function(err, same) {
    if (err) {
      callback(err);
    } else {
      callback(err, same);
    }
  });
}

// //delete token

// UserSchema.methods.deleteToken=function(token,cb){
//   var user=this;

//   user.update({$unset : {token :1}},function(err,user){
//       if(err) return cb(err);
//       cb(null,user);
//   })
// }

const userModel = mongoose.model("user", UserSchema)

var User = mongoose.model("User", UserSchema);
module.exports = User;

module.exports = userModel