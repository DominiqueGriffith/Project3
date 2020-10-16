var db = require("../models");
const sessionChecker = require("../server.js")

module.exports = {
  create: function (req, res) {

    req.session.loggedin = true;
    db.User
      .create({
        // username: req.body.username,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password


      }).then(dbModel => res.json(dbModel))
    console.log("New USER!" + req.body.email + req.body.password)

    // .then(function () {
    //   res.redirect(307 , "/dashboard")
    // })
    // .catch(function(err) {
    //   res.status(401).json(err);
    // });

    // (req,res => {


    //   if (req.session.loggedin) {
    //     res.sendStatus(200)
    //     res.redirect("/user");
    //   }
    //   else {
    //     res.sendStatus(404)
    //     // console.log(docs)
    //     // req.session.user = docs;
    //     res.redirect("/dashboard");
    //   }
    // }
    // )
    // if (err){
    //   res.redirect("/signup");
    // }
    // else () {

    // }
    // .then(user => {
    //   req.session.user = user.dataValues;
    //   console.log(req.body)
    //   // console.log(req.body.username)
    //   // console.log(req.body.password)
    // })
    // .catch(error => {
    //     res.redirect('/signup');
    // });


    // .then(dbModel => {
    //   console.log(JSON.stringify(dbModel))
    //   res.json(dbModel)
    //   console.log(req.body.email)
    //   console.log(req.body.username)
    //   console.log(req.body.password)
    // }
    // )


    // .catch(err => res.status(422).json(err));
  },
  loggedin: function (req, res) {

    var username = JSON.stringify(req.body.username);
    var password = JSON.stringify(req.body.password);

    try {
      var user = db.User.findOne({ username: username }).exec();
      if (!user) {
        res.redirect("/user");
      }
      user.comparePassword(password, (error, match) => {
        if (!match) {
          res.redirect("/user");
        }
      });
      req.session.user = user;
      res.redirect("/dashboard");
    } catch (error) {
      console.log(error)
    }



    // console.log("This is req.body " +username + password)


    // if (username && password) {
    //   var hashed_password = crypto.createHash("sha1").update(req.body.password).digest("hex");
    // }
    // db.User
    //   .find({
    //     username: req.body.username,
    //     password: hashed_password


    //   })
    // .then(function (req, res) {

    //   if (res) {
    //     console.log(req.length > 0)
    //     req.session.loggedin = true;
    //     req.session.userID = results[0]._id;
    //     req.session.username = results[0].username;
    //     res.send("userLoggedIn");
    //     // res.sendStatus(200)
    //   }
    //   else {
    //     res.send("wrongPassOrUser");
    //     // res.sendStatus(404)
    //   }
    // })
    //     .then(function (req, res){
    //   if (req.session.loggedin) {
    //     res.sendStatus(200)
    //   } else {
    //     res.sendStatus(404)
    //   }
    // })
  },
  findAll: function (req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
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