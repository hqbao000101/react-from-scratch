import React, { Component } from "react";
import { Navigate } from "react-router-dom";

export default class Page404 extends Component {
  state = {
    trangThai: false,
  };

  render() {
    if (this.state.trangThai) {
      return <Navigate to="/home" replace={true} />;
    }
    return (
      <div className="text-center">
        <img
          src="https://blog.thomasnet.com/hubfs/shutterstock_774749455.jpg"
          alt="Page Not Found"
          className="img-fluid w-50"
        />
        <button
          className="btn btn-danger text-white p-3"
          onClick={() => {
            this.setState({
              trangThai: true,
            });
          }}
        >
          Quay về trang chủ
        </button>
      </div>
    );
  }
}
