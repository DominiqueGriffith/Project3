const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes");

​
const PORT = 3000;
​

​
// Initialize Express
const app = express();
​
// Configure middleware
​
// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populate");
​
// Connect to the Mongo DB
// mongoose.connect("mongodb://localhost/populate", { useNewUrlParser: true });
​


​

​
// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});