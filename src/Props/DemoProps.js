import React, { Component } from "react";
import CardPhoneItem from "./CardPhoneItem";

export default class DemoProps extends Component {
  arrObject = [
    {
      ten: "Galaxy S22",
      gia: 30000,
      hang: "Samsung",
      hinhAnh:
        "https://cdn.tgdd.vn/Products/Images/42/217937/samsung-galaxy-s20-ultra-600x600-1-600x600.jpg",
    },
    {
      ten: "Galaxy S23",
      gia: 30000,
      hang: "Nokia",
      hinhAnh:
        "https://cdn.tgdd.vn/Products/Images/42/217937/samsung-galaxy-s20-ultra-600x600-1-600x600.jpg",
    },
    {
      ten: "Galaxy S24",
      gia: 70000,
      hang: "I phone",
      hinhAnh:
        "https://cdn.tgdd.vn/Products/Images/42/217937/samsung-galaxy-s20-ultra-600x600-1-600x600.jpg",
    },
  ];

  phoneItem = {
    ten: "Galaxy S22",
    gia: 30000,
    hang: "Samsung",
    hinhAnh:
      "https://cdn.tgdd.vn/Products/Images/42/217937/samsung-galaxy-s20-ultra-600x600-1-600x600.jpg",
  };

  state = {
    hoTen: "Quang Khải",
  };

  thayDoiHoTen = (string) => {
    this.setState({
      hoTen: string,
    });
  };

  //  * props là một thuộc tính giúp truyền dữ liệu từ các component cha tới các component con
  // * props có thể nhận các giá trị về string, number, array, object, jsx, có thể truyền các function vào props
  render() {
    return (
      <>
        <div className="container">
          <h1 className="py-5">Demo Props React</h1>
          <div className="row">
            {/* <CardPhoneItem item={this.phoneItem} hoTen="Nam"/> */}
            {/* sử dụng render with map kèm theo truyền props để có thể gửi dữ liệu cho các component con và render hiển thị lên cho người dùng */}
            {this.arrObject.map((item, index) => {
              return (
                <div className="col-4" key={index}>
                  <CardPhoneItem
                    item={item}
                    hoTen={this.state.hoTen}
                    thayDoiHoTen={this.thayDoiHoTen}
                  />
                  ;
                </div>
              );
            })}
            {/* <CardPhoneItem item={this.arrObject[0]} key="0" /> */}
            {/* <CardPhoneItem item={this.arrObject[1]} key="1" /> */}
            {/* <CardPhoneItem item={this.arrObject[2]} key="2" /> */}
          </div>
        </div>
      </>
    );
  }
}
