import React, { Component } from 'react';

export default class Home2 extends Component {
    constructor() {
      super();
      //Set default message
      this.state = {
        message: 'Loading...'
      }
    }
    componentDidMount() {
      //GET message from server using fetch api
      fetch('/api/home2')
        .then(res => res.text())
        .then(res => this.setState({message: res}));
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