import React, { Component } from "react";
import PhoneDetail from "./PhoneDetail";
// import Phone1 from "./img/applephone.jpg";

export default class ListPhone extends Component {
  phoneData = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./image/applephone.jpg",
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./image/sp_note7.png",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./image/vsphone.jpg",
    },
  ];

  state = {
    phoneItem: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./image/applephone.jpg",
    },
  };

  xemChiTiet = (item) => {
    this.setState({
      phoneItem: item,
    })
  }

  render() {
    return (
      <>
        {/* C1: sử dụng import để gắn các hình ảnh vào thẻ img */}
        {/* <img src={Phone1} alt="Phone 1" /> */}
        {/* C2: để hình ảnh nằm trong public và tưởng tượng đường dẫn bắt đầu từ file index.html */}
        {/* <img src="./image/applephone.jpg" alt="Phone 1" /> */}
        <h1 className="text-center my-5">Danh sách sản phầm</h1>
        <div className="container">
          <div className="row">
            {this.phoneData.map((item, index) => {
              return (
                <div className="col-4" key={index}>
                  <PhoneDetail item={item} xemChiTiet={this.xemChiTiet}/>
                </div>
              );
            })}
          </div>
          <div className="row my-5">
            <div className="col-6">
              <img
                src={this.state.phoneItem.hinhAnh}
                alt={this.state.phoneItem.maSP}
                className="img-fluid"
              />
            </div>
            <div className="col-6 ps-5">
              <h2 className="mt-5">Thông số kỹ thuật</h2>
              <table cellPadding={20}>
                <tbody>
                  {/* Row 1 */}
                  <tr>
                    <td>Màn hình</td>
                    <td>{this.state.phoneItem.manHinh}</td>
                  </tr>
                  {/* Row 2 */}
                  <tr>
                    <td>Hệ điều hành</td>
                    <td>{this.state.phoneItem.heDieuHanh}</td>
                  </tr>
                  {/* Row 3 */}
                  <tr>
                    <td>Camera trước</td>
                    <td>{this.state.phoneItem.cameraTruoc}</td>
                  </tr>
                  {/* Row 4 */}
                  <tr>
                    <td>Camera sau</td>
                    <td>{this.state.phoneItem.cameraSau}</td>
                  </tr>
                  {/* Row 5 */}
                  <tr>
                    <td>Ram</td>
                    <td>{this.state.phoneItem.ram}</td>
                  </tr>
                  {/* Row 6 */}
                  <tr>
                    <td>ROM</td>
                    <td>{this.state.phoneItem.rom}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}
