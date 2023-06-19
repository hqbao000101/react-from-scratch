import React, { Component } from "react";
// import './style.css';
import style from "./style.module.css";

// ! global css giúp css cho components, nhược điểm là tất cả các component khác có selector giống bên trong đều sẽ ăn css đó.

export default class ComponentWithCss extends Component {
  styleForComponent = "bg-success text-white fs-1";
  render() {
    return (
      <div>
        {/* <h1 className={`${style.demo} bg-success`}>Tôi ở ComponentWithCss</h1> */}
        <h2
          // style={{ color: "white", backgroundColor: "#222", fontSize: "100px" }}
          className={this.styleForComponent}
        >
          Demo Inline class
        </h2>
        <h3
          // style={{ color: "white", backgroundColor: "#222", fontSize: "100px" }}
          className={this.styleForComponent}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, maxime?
        </h3>
      </div>
    );
  }
}
