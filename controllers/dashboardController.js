var db = require("../models");

module.exports = {
    findAll: function (req, res) {
    // .post((req, res) => {
    //     var username = req.body.username,
            password = req.body.password;

        db.User.findOne({ where: { username: username } }).then(function (user) {
            if (!user) {
                res.redirect('/');
            } else if (!user.validPassword(password)) {
                res.redirect('/login');
            } else {
                req.session.user = user.dataValues;
                res.redirect('/dashboard');
            }
        });
    // });
    }
}