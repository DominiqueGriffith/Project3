var db = require("../models");

module.exports = {
    create: function (req, res) {
        console.log(req.body)
        db.User
          .create(req.body.bookData)
          .then(dbModel => res.json(dbModel))
          // .catch(err => res.status(422).json(err));
      }

    };