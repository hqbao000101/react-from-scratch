import React, { Component } from "react";

export default class ExCar extends Component {
  state = {
    color: "black",
  };

  handleChangeColor = (changeColor) => {
    this.setState({
      color: changeColor,
    });
  };

  render() {
    let { color } = this.state;
    return (
      <div className="container row">
        <img
          src={`./img_ex/CarBasic/products/${color}-car.jpg`}
          alt=""
          className="col-4"
        />
        <div className="col-8">
          <button
            className="btn btn-dark m-5 text-white"
            onClick={() => {
              this.handleChangeColor("black");
            }}
          >
            Black
          </button>
          <button
            className="btn btn-danger m-5"
            onClick={() => {
              this.handleChangeColor("red");
            }}
          >
            Red
          </button>
          <button
            className="btn btn-info m-5"
            onClick={() => {
              this.handleChangeColor("silver");
            }}
          >
            Silver
          </button>
          <button
            className="btn btn-secondary m-5"
            onClick={() => {
              this.handleChangeColor("steel");
            }}
          >
            Steel
          </button>
        </div>
      </div>
    );
  }
}
