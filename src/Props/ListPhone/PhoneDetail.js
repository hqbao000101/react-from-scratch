import React, { Component } from "react";

export default class PhoneDetail extends Component {
  render() {
    let { maSP, tenSP, hinhAnh } = this.props.item;
    return (
      <>
        <img src={hinhAnh} alt={`Phone ${maSP}`} className="h-75 w-100" />
        <div className="text-center">
          <h2 className="mt-4 mb-3">{tenSP}</h2>
          <button className="btn btn-success text-white" onClick={() => {
            this.props.xemChiTiet(this.props.item);
          }} >Xem chi tiết</button>
        </div>
      </>
    );
  }
}
