var db = require("../models");

module.exports = {
  create: function (req, res) {
      console.log(req.body)
      db.User
        .create(req.body.signupData)
        .then(dbModel => res.json(dbModel))
        // .catch(err => res.status(422).json(err));
    },
  // create: function (req, res) {
  //   var username = req.body;
  //   var password = req.body;
  //   if (username && password) {
  //     var signupDataBack = {
  //       username: username
  //     };

  //     db.User
  //       .find({where: signupDataBack})
  //       // .sort({ date: -1 })
  //       .then(dbModel => res.json(dbModel))
  //     if (dbModel.length === 0) {
  //       // var hashed_password = crypto.createHash("sha1").update(req.body.password).digest("hex");
  //       // var postObj = {
  //       //   username: username,
  //       //   password: hashed_password
  //       // }
  //       db.User
  //         .create(req.body.signupData)
  //         .then(dbModel => res.json(dbModel))
  //         .then(res.send("userCreateSuccess"))
  //     }
  //     else {
  //       res.send("userAlreadyExists");
  //     }
  //   }else{
  //     res.send("formNotComplete")
  //   }

  //   // .catch(err => res.status(422).json(err));
  // },

};