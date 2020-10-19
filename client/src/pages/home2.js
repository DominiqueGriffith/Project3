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
         
          <h3>{this.state.message}</h3>
        </div>
      );
    }
  }