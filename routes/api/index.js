const router = require("express").Router();
const bookRoutes = require("./books.js");
const userRoutes = require("./users.js")
const bookclubRoutes = require("./bookclubs.js")
const dashboardRoutes = require("./dashboard")


// Book routes
router.use("/books", bookRoutes);
router.use("/user", userRoutes);
router.use("/bookclub", bookclubRoutes);
router.use("/dashboard", dashboardRoutes);


module.exports = router;
