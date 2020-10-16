// import React, { useState, Component } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Container, Button, Alert, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input } from 'reactstrap';
// import Home from "./pages/Home";
// // import Search from "./pages/search";
// import loggedIn from "./pages/loggedIn";
// import bookclub from "./pages/bookclub";
// import dashboard from "./pages/dashboard"
// import withAuth from "./withAuth.js";
// import Secret from "./pages/secret";
// import './fonts.css';
// // import logged from "./components/pages/loggedIn";

// function App() {
//   return (
//     <Router>
//       <div>
//        <Switch>
      
//         <Route exact path="/" component={Home} />
        
//         <Route exact path="/loggedIn" component={withAuth(loggedIn)} />
      
//         {/* <Route exact path="/search" component={Search} /> */}
//         <Route exact path="/bookclub" component={withAuth(bookclub)} />

//         <Route exact path="/dashboard" component={withAuth(dashboard)} />
      
//         <Route path="/secret" component={Secret} />
        
//         {/* <Route exact path="/bookclub" component={} /> */}
//         </Switch>
//       </div> 
//     </Router>
//   );
// }


// export default App;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home2 from './pages/home2';
import Secret from './pages/secret';
import Login from './pages/login';
import Signup from './pages/signup';
import withAuth from './withAuth';
export default class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/secret">Secret</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">signup</Link></li>
        </ul>
        <Switch>
          <Route path="/" exact component={Home2} />
          <Route path="/secret" component={withAuth(Secret)} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </div>
      </Router>
    );
  }
}