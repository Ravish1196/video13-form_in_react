import React, { Component } from 'react';
import './style.css';

export class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleChange = (e) => {
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    console.log(e.target);
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="username" onChange={this.handleChange} />
          <input type="text" name="email" onChange={this.handleChange} />
          <p>{this.state.username}</p>
          <p>{this.state.email}</p>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}
