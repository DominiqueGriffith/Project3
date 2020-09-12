import axios from "axios";
import React from "react";
import APIHooks from "./APIhooks"
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q="
const APIKEY = "&key=AIzaSyC5HzoMzNglXG_H1OUXl6DHyVlhOF9KFiI"






export default {
  getBook: function (currentSearch) {
    return axios.get(BASEURL + currentSearch + APIKEY + "&maxResults=8");
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("localhost/api/books/" + id).then(result => result.data);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    console.log(bookData);
    return axios.post("/api/books", { bookData }).then(result => result.data);

  },

  // Get the saved a books from the database
  savedBooks: function () {
    return axios.get("localhost/api/books").then(result => result.data);
  }
};
  // http://localhost:3000/