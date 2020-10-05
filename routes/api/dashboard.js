const router = require("express").Router();
const dashboardController = require("../../controllers/dashboardController.js");

router
.route('/')
.get(dashboardController.findAll);
// if (req.session.user && req.cookies.user_sid) {
    
// }
// else {
//         res.redirect('/user');
//     }

module.exports = router;