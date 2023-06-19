import React, { Component } from "react";

export default class ExDemoState extends Component {
  state = {
    isLogin: false,
  };

  handleLogin = () => {
    this.setState({
      isLogin: true,
    });
  };

  handleLogOut = () => {
    this.setState({
      isLogin: false,
    });
  };

  renderButton = () => {
    if (this.state.isLogin) {
      return (
        <button
          className="btn btn-danger text-white px-5 py-3 m-5"
          onClick={this.handleLogOut}
        >
          Log out
        </button>
      );
    }

    return (
      <button
        className="btn btn-primary text-white px-5 py-3 m-5"
        onClick={this.handleLogin}
      >
        Log in
      </button>
    );
  };

  render() {
    return <>{this.renderButton()}</>;
  }
}
