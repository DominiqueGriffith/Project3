const router = require("express").Router();
const signupController = require("../../controllers/signupController.js");
const sessionChecker = require("../../server.js")
router.route("/")
    // .get(signupController.findAll)
    // .get(sessionChecker, (req, res) => {
    //     res.sendFile(path.join(__dirname, "../client/build/index.html"));
    // })
    .post(signupController.create)
    // .post(signupController.loggedin)


module.exports = router;