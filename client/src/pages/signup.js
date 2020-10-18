import React, { Component } from 'react';
import API from "../utils/API.js";
import { Container, Row, Col, Button, Alert, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input } from 'reactstrap';
export default class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      username: ''
    };
  }
  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }
  onSubmit = (event) => {
    event.preventDefault();
    API.signUpUser(this.state.email, this.state.username, this.state.password)
    // fetch('/api/register', {
    //     method: 'POST',
    //     body: JSON.stringify(this.state),
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   })
    //   .then(res => {
    //     if (res.status === 200) {
    //       this.props.history.push('/');
    //     } else {
    //       const error = new Error(res.error);
    //       throw error;
    //     }
    //   })
    //   .catch(err => {
    //     console.error(err);
    //     alert('Error logging in please try again');
    //   });
  }
  render() {
    console.log(this.state)
    return (
      <form onSubmit={this.onSubmit}>

        Email: <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={this.state.email}
          onChange={this.handleInputChange}
          required
        />
        <br></br>
        <br></br>

        Username: <input
          type="text"
          name="username"
          placeholder="Enter username"
          value={this.state.username}
          onChange={this.handleInputChange}
          required
        />
        <br></br>
        <br></br>


        Password: <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={this.state.password}
          onChange={this.handleInputChange}
          required
        />
         <br></br>
        <br></br>
        <Button type="submit" value="Submit" color="primary" className="btn btn-warning">Sign Up</Button>

      
      </form>
    );
  }
}