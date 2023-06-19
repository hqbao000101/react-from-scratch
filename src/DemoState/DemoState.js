import React, { Component } from "react";

export default class DemoState extends Component 

// * state: chứa các giá trị ảnh hưởng tới việc render layout
// * setState: update giá trị của state => state thay đổi => render() chạy lại 

{
  state = {
    soLuong: 10,
  };
  increase = () => {
    this.setState({
      soLuong: this.state.soLuong + 1,
    });
  };
  decrease = () => {
    this.setState({
      soLuong: this.state.soLuong - 1,
    });
  };
  render() {
    return (
      <div className="p-5">
        <button className="btn btn-danger" onClick={this.decrease}>
          -
        </button>
        <span className="mx-5">{this.state.soLuong}</span>
        <button className="btn btn-success" onClick={this.increase}>
          +
        </button>
      </div>
    );
  }
}
