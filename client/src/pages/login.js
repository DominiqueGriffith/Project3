import React, { Component } from 'react';
import { Container, Row, Col, Button, Alert, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input } from 'reactstrap';
import Search from './loggedIn';
import { Redirect } from 'react-router-dom';

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email : '',
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
    fetch('/api/authenticate', {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        if (res.status === 200) {
          
          // this.props.history.push('/api/home2');
             window.location.reload();
          
       
          // fetch('/api/secret') 
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
    return (
      <form onSubmit={this.onSubmit}>
        
       Username: <input
          type="username"
          name="username"
          placeholder="Enter username"
          value={this.state.username}
          onChange={this.handleInputChange}
          required
        />
        <br>
        </br>
        <br>
        </br>
        Password: <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={this.state.password}
          onChange={this.handleInputChange}
          required
        />
        <br>
        </br>
        <br>
        </br>
                <Button type="submit" value="Submit" color="primary" className="btn btn-warning">Login</Button>

      </form>
      
    );
  
  }
  
}