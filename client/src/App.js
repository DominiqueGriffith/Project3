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
import { Container, Row, Col, Button, Alert, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input } from 'reactstrap';
import AddLogInInfo from "./components/AddLoginInfo";
import AddSignUpInfo from "./components/addSignUp.js";
import Home2 from './pages/home2';
import Secret from './pages/secret';
import Login from './pages/login';
import Signup from './pages/signup';
import withAuth from './withAuth';
import Signout from './pages/signout';

const styles = {
  card: {
    border: "1px lightgray solid",
    borderRadius: "5px",
    maxWidth: "260px",
    boxSizing: "border-box",
    display: "block",
    textAlign: "center",
    paddingTop: "15px"

  },
  cardBorder: {
    border: "1px lightgray solid",
    borderRadius: "5px",
    maxWidth: "260px",
    boxSizing: "border-box",
    display: "block",
    textAlign: "center",
    padding: "5px"

  },
  col: {
    paddingTop: ".5rem",
    paddingBottom: ".5rem"
  },
  a: {
    fontFamily: "Pacifico"

  },
  img: {
    height: "180px"
  },
};




export default class App extends Component {
  state = {
    visible: true,
    modalIsOpen: false,
    currentSearch: "",
    books: [],
    // name: "",
    // value: "",
    title: "",
    saved: []
  }
  toggleModal() {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen

    });
  }
  toggleModalTwo() {
    this.setState({
      modalTwoIsOpen: !this.state.modalTwoIsOpen


    });
  }
  toggleModalThree() {
    this.setState({
      modalThreeIsOpen: !this.state.modalThreeIsOpen


    });
  }

  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
            <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
              <a className="navbar-brand" id="page-title" href="#" style={styles.a}>Same Page</a>
            </Link>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">

                <li className="nav-item active">
                  <a color="primary" className="nav-link" style={{ cursor: 'pointer' }} onClick={this.toggleModalTwo.bind(this)}>Login</a>
                </li>
                <li className="nav-item active">
                  <Button color="primary" className="btn btn-warning" onClick={this.toggleModal.bind(this)}>Sign Up</Button>
                </li>
                <li>
                  <Link to="/secret">
                    <Button color="primary" className="btn btn-warning" onClick="">Dashboard</Button>
                  </Link>
                </li>


              </ul>

              <Modal isOpen={this.state.modalTwoIsOpen}>
                <ModalHeader toggle={this.toggleModalTwo.bind(this)}>Please enter your Username and Password</ModalHeader>

                <ModalBody>
                  <Login />
                </ModalBody>
                <ModalFooter>



                  <Button color="secondary" className="btn btn-dark" onClick={this.toggleModalTwo.bind(this)}>Cancel</Button>
                </ModalFooter>


              </Modal>



              <Modal isOpen={this.state.modalIsOpen}>
                <ModalHeader toggle={this.toggleModal.bind(this)}>Please enter your E-mail address, Username and Password</ModalHeader>

                <ModalBody>
                  <Signup />
                </ModalBody>
                <ModalFooter>
                
                  <Button color="secondary" className="btn btn-dark" onClick={this.toggleModal.bind(this)}>Cancel</Button>
                </ModalFooter>


              </Modal>
            </div>
          </nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li>Secret</li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">signup</Link></li>
            <li><Link to="/signout">signout</Link></li>

          </ul>
          <Switch>
            <Route path="/" exact component={Home2} />
            <Route path="/secret" component={withAuth(Secret)} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/signout" component={Signout} />
          </Switch>
        </div>
      </Router>
    );
  }
}