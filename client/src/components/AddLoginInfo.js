import React, { Component } from "react";
import { Container, Button, Alert, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input } from 'reactstrap';
import { Link } from "react-router-dom";
import axios from "axios";
import API from "../utils/API";

class AddLogInInfo extends Component {
  state =
    {
      visible: true,
      modalIsOpen: false,
      // isAuthenticated: false,
      // resData:'',
      username:'',
      email: '',
      password:''
    }
  // constructor(props) {
  //   super(props)
  //   this.state = {

  //     username: '',
  //     password: ''
  //   }
  // }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
 
  onSubmit = (event) => {
    event.preventDefault();
    fetch('/api/authenticate', {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        if (res.status === 200) {
          this.props.history.push('/');
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch(err => {
        console.error(err);
        alert('Error logging in please try again');
      });
    }

 
  render() {
    const { username, password } = this.state
    console.log("THIS IS STATE OBJECT" + JSON.stringify(this.state))
    return (
      <div>

        <form onSubmit={this.submitHandler}>
          <div>
            <h6>Please enter your Username and Password?</h6>
            <br>
            </br>
                  Username <input type="text"
              name="username"
              value={username}
              onChange={this.changeHandler} />
            <br>
            </br>
            <br>
            </br>
                        Password <input type="password"
              name="password"
              value={password}
              onChange={this.changeHandler} />
          </div>
          <br>
          </br>

          <Link to="/loggedIn" className={window.location.pathname === "/loggedIn" ? "nav-link active" : "nav-link"}>
          <Button color="primary" onClick={this.submitHandler} className="btn btn-warning">Log in</Button>
          </Link>
        </form>
        <br>
        </br>

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


        </Modal>
      </div>
    )
  }
}



export default AddLogInInfo