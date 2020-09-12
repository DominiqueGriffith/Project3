
import React, { Component } from "react";
import { Container, Button, Alert, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input } from 'reactstrap';
import { Link } from "react-router-dom";
import AddLogInInfo from "../components/AddLoginInfo.js";
import AddSignUp from "../components/addSignUp.js";




const styles = {
  card: {
    border: "1px lightgray solid",
    borderRadius: "5px",
    maxWidth: "260px",
    boxSizing: "border-box",
    display: "block",
    textAlign: "center",

  },
  col: {
    paddingTop: ".5rem",
    paddingBottom: ".5rem"
  },
  a: {
    fontFamily: "Pacifico"

  }
};





// const styles = {
//   pageTitle: {
//     fontFamily: 'Pacifico', 'cursive'
// }
// };

class Home extends Component {
  state = {
    visible: true,
    modalIsOpen: false

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
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
          <a className="navbar-brand" id="pageTitle" href="#" style={styles.a}>Same Page</a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">

              <li className="nav-item active">
                <a color="primary" className="nav-link" onClick={this.toggleModalTwo.bind(this)}>Login</a>
              </li>
              <li className="nav-item active">
                <Button color="primary" className="btn btn-warning" onClick={this.toggleModal.bind(this)}>Sign Up</Button>
              </li>

            </ul>

          </div>
        </nav>

        <div className="container">
          <div className="w-100"></div>
          <div className="row">
            <div className="col-md-6">
              <div id="user-Search"></div>
            </div>
            <br>
            </br>
            <div className="w-100"></div>
            <div className="row">
              <div id="book-info">
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <h4>Top Rated Books</h4>
              </div>
            </div>


          </div>

          <div className="w-100"></div>
          <div className="row">
            <div className="col-md-3" style={styles.col}>
              <div id="top-week-one" style={styles.card}>
                <div>IMAGE:</div>
                {/* <img src="" alt="" class="img img-thumbnail"> </img> */}
                <h6 id="bookone-title">BOOK TITLE:</h6>
                <h6 id="bookone-author">BOOK AUTHOR:</h6>
                <h6 id="bookone-votes">CURRENT VOTES:</h6>




              </div>

            </div>

            <div className="col-md-3" style={styles.col}>
              <div id="top-week-one" style={styles.card}>
                <div>IMAGE:</div>
                <h6 id="bookone-title">BOOK TITLE:</h6>
                <h6 id="bookone-author">BOOK AUTHOR:</h6>
                <h6 id="bookone-votes">CURRENT VOTES:</h6>

              </div>

            </div>

            <div className="col-md-3" style={styles.col} >
              <div id="top-week-one" style={styles.card}>
                <div>IMAGE:</div>
                <h6 id="bookone-title">BOOK TITLE:</h6>
                <h6 id="bookone-author">BOOK AUTHOR:</h6>
                <h6 id="bookone-votes">CURRENT VOTES:</h6>

              </div>

            </div>
            <div className="col-md-3" style={styles.col}>
              <div id="top-week-one" style={styles.card}>
                <div>IMAGE:</div>
                <h6 id="bookone-title">BOOK TITLE:</h6>
                <h6 id="bookone-author">BOOK AUTHOR:</h6>
                <h6 id="bookone-votes">CURRENT VOTES:</h6>

              </div>

            </div>

          </div>






        </div>
{/* 
        <Modal isOpen={this.state.modalThreeIsOpen}>
          <ModalHeader toggle={this.toggleModalThree.bind(this)}>Logged In Successful</ModalHeader>

          <ModalBody>
            WELCOME BACK!
          </ModalBody>
          <ModalFooter>
            <Link to="/loggedIn" className={window.location.pathname === "/loggedIn" ? "nav-link active" : "nav-link"}>
              <Button color="primary" onClick={this.toggleModalThree.bind(this)} className="btn btn-warning">Okay</Button>
            </Link>

          </ModalFooter>


        </Modal> */}

        <Modal isOpen={this.state.modalTwoIsOpen}>
          <ModalHeader toggle={this.toggleModalTwo.bind(this)}>Please enter your Username and Password</ModalHeader>

          <ModalBody>
            <AddLogInInfo />
          </ModalBody>
          <ModalFooter>
            
         

            <Button color="secondary" className="btn btn-dark" onClick={this.toggleModalTwo.bind(this)}>Cancel</Button>
          </ModalFooter>


        </Modal>



        <Modal isOpen={this.state.modalIsOpen}>
          <ModalHeader toggle={this.toggleModal.bind(this)}>Please create a Username and Password</ModalHeader>

          <ModalBody>
    <AddSignUp />
    </ModalBody>
          <ModalFooter>
          <Link to="/loggedIn" className={window.location.pathname === "/loggedIn" ? "nav-link active" : "nav-link"}>
            <Button color="primary" className="btn btn-warning">Sign Up</Button>
</Link>
            <Button color="secondary" className="btn btn-dark" onClick={this.toggleModal.bind(this)}>Cancel</Button>
          </ModalFooter>


        </Modal>
      </React.Fragment>
    )
  }
}



export default Home;
