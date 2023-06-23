import React, { Component } from "react";
import Content from "../Templates/Content";
import { Outlet } from "react-router-dom";

export default class Detail extends Component {
  render() {
    return (
      <div>
        <h3>Detail</h3>
        <Content />
        <img src="../image/applephone.jpg" alt="" />
        <Outlet />
      </div>
    );
  }
}
