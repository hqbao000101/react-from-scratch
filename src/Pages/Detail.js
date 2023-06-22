import React, { Component } from "react";
import Content from "../Templates/Content";

export default class Detail extends Component {
  render() {
    const studentId = this.props.match;
    console.log(studentId);
    return (
      <div>
        <h3>Detail</h3>
        <Content />
        <img src="../image/applephone.jpg" alt="" />
      </div>
    );
  }
}
