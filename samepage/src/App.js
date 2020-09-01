import React, { useState, Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container, Button, Alert, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input } from 'reactstrap';
import Home from "./pages/Home";
import Search from "./pages/search";
import loggedIn from "./pages/loggedIn";
import './fonts.css';
// import logged from "./components/pages/loggedIn";

function App() {
  return (
    <Router>
      <div>
       
      
        <Route exact path="/" component={Home} />
        <Route exact path="/loggedIn" component={loggedIn} />
        <Route exact path="/search" component={Search} />
        {/* <Route exact path="/bookclub" component={} /> */}
       
      </div>
    </Router>
  );
}


export default App;
