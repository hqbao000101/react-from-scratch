import React, { Component } from "react";

export default class ItemDetail extends Component {
  render() {
    let url = window.location.href.split("/");
    console.log(url[url.length - 1]);
    return <div>ItemDetail</div>;
  }
}
