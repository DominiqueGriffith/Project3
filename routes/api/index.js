const router = require("express").Router();
const bookRoutes = require("./books.js");
const userRoutes= require("./users.js")

// Book routes
router.use("/books", bookRoutes);
router.use("/user", userRoutes);
router.use("/bookclub", userRoutes);


module.exports = router;
