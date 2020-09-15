import axios from "axios";
import React from "react";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q="
const APIKEY = "&key=AIzaSyC5HzoMzNglXG_H1OUXl6DHyVlhOF9KFiI"






export default {
  getBook: function (currentsearch) {
    return axios.get(BASEURL + currentsearch + APIKEY + "&maxResults=8");
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("localhost/api/books/" + id).then(result => result.data);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    console.log(bookData); const bookdatas = JSON.stringify(bookData) 
    return axios.post("/api/books", { bookData }).then(result => result.data);

  },

  // Get the saved a books from the database
  savedBooks: function () {
 
    return axios.get("/api/books").then(result => result.data);

  },

  signUp: function (req) {
    console.log(req)
    // console.log("username " + username + "password " + password)
    return axios.post("/api/signup", req).then(result => result.data);
    // .then(result => result.data);

  }


};
  // http://localhost:3000/