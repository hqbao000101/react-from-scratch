import React, { Component } from "react";

export default class CardPhoneItem extends Component {
  render() {
    // * để lấy được các dữ liệu truyền vào component ta sẽ sử dụng this.props
    // * let {ten, gia, hang, hinhAnh} = this.props.item;
    let { ten, gia, hang, hinhAnh } = this.props.item;
    return (
      // ! bs5-card-background
      <div className="card text-white bg-primary my-4 shadow-lg rounded-4 overflow-hidden">
        <div>
          <img className="card-img-top" src={hinhAnh} alt="Title" />
        </div>
        <div className="card-body">
          <h4 className="card-title">{ten}</h4>
          <p className="card-text">{hang}</p>
          <p className="card-text">{gia} đ</p>
          <p className="card-text">{this.props.hoTen}</p>
          {/* <button
            onClick={() => {
              // ! props là một dữ liệu dạng read-only nên không cho phép thay đổi giá trị khi ở component con
              this.props.hoTen = "Nam";
              console.log(this.props.hoTen);
            }}
          >
            Thay đổi props
          </button> */}
          <button
            onClick={() => {
              this.props.thayDoiHoTen("Khanh");
            }}
          >
            Đổi tên
          </button>
        </div>
      </div>
    );
  }
}
