import React, { Component } from 'react';

export default class Secret extends Component {
    constructor() {
      super();
      //Set default message
      this.state = {
        message: 'Loading...'
      }
    }
    componentDidMount() {
      //GET message from server using fetch api
      fetch('/api/secret')
        .then(res => res.text())
        .then(res => this.setState({message: res}));
    }
    render() {
      return (
        <div>
    
          <h4>{this.state.message}</h4>
        </div>
      );
    }
  }