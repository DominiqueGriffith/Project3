const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes");
const session = require('express-session')
// const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser')
const morgan = require('morgan')
const User = require('./models/User')
const secret = 'mysecretsshhh';
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const withAuth = require('./middleware');



const PORT = process.env.PORT || 3001;
// Initialize Express
const app = express();

// create application/json parser
const jsonParser = bodyParser.json()
 
// initialize body-parser to parse incoming parameters requests to req.body
app.use(bodyParser.urlencoded({ extended: true }));

// set morgan to log info about our requests for development use.
app.use(morgan("dev"));

// initialize cookie-parser to allow us access the cookies stored in the browser.
app.use(cookieParser());

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// // Make public a static folder
// app.use(express.static("public"));

// initialize express-session to allow us track the logged-in user across sessions.
app.use(
  session({
    key: "user_sid",
    secret: "somerandomstuffs",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 600000,
    },
  })
);

// This middleware will check if user's cookie is still saved in browser and user is not set, then automatically log the user out.
// This usually happens when you stop your express server after login, your cookie still remains saved in the browser.
app.use((req, res, next) => {
  if (req.cookies.user_sid && !req.session.user) {
    res.clearCookie("user_sid");
  }
  next();
});

app.get('/api/home2', function(req, res) {
  res.send('Welcome to SamePage!');
 
});



app.get('/api/secret', withAuth, function(req, res) {
  // res.send('The password is potato');
  res.send('Hello ' + req.username);

});

// a simple route that will return a 200 HTTP status if our requester has a valid token:
app.get('/checkToken', withAuth, function(req, res) {
  res.sendStatus(200);
})

// POST route to register a user
app.post('/api/register', function(req, res) {
  const { email, username, password } = req.body;
  const user = new User({ email, username, password });
  user.save(function(err) {
    if (err) {
      res.status(500)
        .send("Error registering new user please try again.");
    } else {
      res.status(200).send("Welcome to the club!");
    }
  });
});

//authenticate checker
app.post('/api/authenticate', function(req, res) {
  const { email, username, password } = req.body;
  User.findOne({ username }, function(err, user) {
    if (err) {
      console.error(err);
      res.status(500)
        .json({
        error: 'Internal error please try again'
      });
    } else if (!user) {
      res.status(401)
        .json({
          error: 'Incorrect user or password'
        });
    } else {
      user.isCorrectPassword(password, function(err, same) {
        if (err) {
          res.status(500)
            .json({
              error: 'Internal error please try again'
          });
        } else if (!same) {
          res.status(401)
            .json({
              error: 'Incorrect user or password'
          });
        } else {
          // Issue token
          const payload = { username };
          const token = jwt.sign(payload, secret, {
            expiresIn: '1h'
          });
          res.cookie('token', token, { httpOnly: true })
            .sendStatus(200);
        }
      });
    }
  });
});

//logout user
app.get('/api/logout',withAuth,function(req,res){

res.clearCookie('token', { httpOnly: true })
req.session.destroy();
res.sendStatus(200);
}); 

// adding the middleware to our express setup so express can parse cookies passed by our browser
app.use(cookieParser());




// // middleware function to check for logged-in usersd
// const sessionChecker = (req, res, next) => {
//   if (req.session.user && req.cookies.user_sid) {
//     // res.redirect("/dashboard");
//     res.sendStatus(200)
//     res.sendStatus("you are loggedin")
//   } else {
//     // next();
//     res.sendStatus(404)
//   }
// };

// // route for Home-Page
// app.get('/', sessionChecker, (req, res) => {
//   res.redirect('/user');
// });

// // route for Home-Page
// app.get("/", sessionChecker, (req, res) => {
//   res.redirect("/login");
// });




app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populatedb");

// Connect to the Mongo DB
// mongoose.connect("mongodb://localhost/populate", { useNewUrlParser: true });






// Start the server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});