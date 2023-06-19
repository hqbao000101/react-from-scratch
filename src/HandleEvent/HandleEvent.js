import React, { Component } from "react";

export default class HandleEvent extends Component {
  thayDoiNoiDung = () => {
    document.querySelector("h1").innerHTML = "Tôi đã đổi nội dung";
  };

  demSao = () => {
    document.querySelector("h1").style.color = "red";
  };

  handleOnChange = (event) => {
    let { value } = event.target;
    console.log(value);
    document.querySelector("h1").innerHTML = value;
  };

  render() {
    return (
      <div>
        <h1>Hello Cybersoft</h1>
        {/* <button className="btn btn-success" onClick={() => {
          this.thayDoiNoiDung();
          this.demSao();
          console.log("thay doi");
        }}>
          Bấm để đổi nội dung
        </button> */}
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            onChange={this.handleOnChange}
          />
        </div>
      </div>
    );
  }
}
