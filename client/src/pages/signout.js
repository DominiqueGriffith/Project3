import React, { Component } from 'react';
export default class Signout extends Component {
    constructor(props) {
        super(props)
        this.state = {
          email : '',
          password: ''
        };
      }

      componentDidMount() {
        // event.preventDefault();
        fetch('/api/logout')
        .then(res => res.text())
        .then(res => this.setState({message: res}));

        localStorage.clear();
        window.location.href = '/';
        
       
    }
    render() {
      return (
        <div>
          <h1>Home 2</h1>
          <p>{this.state.message}</p>
        </div>
      );
    }
  }