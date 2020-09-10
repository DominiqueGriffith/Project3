const router = require("express").Router();
const bookController = require("../../controllers/bookController.js");

// Matches with "/api/books"
router.route("/loggedIn")
    .get(bookController.findAll)
    .post(bookController.create);

module.exports = router;