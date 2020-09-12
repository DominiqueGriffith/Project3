import React, { Component } from "react";
import { Container, Button, Alert, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input } from 'reactstrap';
import { Link } from "react-router-dom";
import axios from "axios";

class AddSignUpInfo extends Component {
  state =
    {
      visible: true,
      modalIsOpen: false
    }
  constructor(props) {
    super(props)
    this.state = {

      username: '',
      password: ''
    }
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  submitHandler = (e) => {
    e.preventDefault()
    console.log(this.state)
    // axios.post("https://samepage.com/bookclub/post", this.state)
    // .then (response => {
    //     console.log(response);
    // })
    // .catch (error => {
    //     console.log(error);
    // })
  }
  toggleModal() {
    this.setState({
      modalThreeIsOpen: !this.state.modalThreeIsOpen


    });
  }
  render() {
    const { username, password } = this.state
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


          <Button color="primary" onClick={this.toggleModal.bind(this)} className="btn btn-warning">Log in</Button>
        </form>
        <br>
        </br>

        <Modal isOpen={this.state.modalIsOpen}>
          <ModalHeader toggle={this.toggleModal.bind(this)}>You're All Set!</ModalHeader>

          <ModalBody>
            Join Now!
          </ModalBody>
          <ModalFooter>
            <Link to="/loggedIn" className={window.location.pathname === "/loggedIn" ? "nav-link active" : "nav-link"}>
              <Button color="primary" onClick={this.toggleModal.bind(this)} className="btn btn-warning">Okay</Button>
            </Link>

          </ModalFooter>


        </Modal>
      </div>
    )
  }
}



export default AddSignUpInfo