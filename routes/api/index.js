const router = require("express").Router();
const bookRoutes = require("./books.js");
const signupRoutes= require("./signup.js")

// Book routes
router.use("/books", bookRoutes);
router.use("/signup", signupRoutes);


module.exports = router;
