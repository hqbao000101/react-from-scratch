import React, { Component, createRef } from "react";
import FormProduct from "./FormProduct";
import "./ProductList.css";

export default class ProductList extends Component {
  constructor() {
    super();
    this.ref = createRef();
  }

  state = {
    arrProduct: [],
  };

  themSanPham = (sanPham) => {
    let newArrayProduct = this.state.arrProduct;
    newArrayProduct.push(sanPham);
    // setState để thay đổi các giá trị bên trong state
    this.setState({ arrProduct: newArrayProduct });
  };

  xoaSanPham = (id) => {
    let index = this.state.arrProduct.findIndex((item) => item.id === id);
    if (index !== -1) {
      let newArrProduct = [...this.state.arrProduct];
      newArrProduct.splice(index, 1);
      this.setState({
        arrProduct: newArrProduct,
      });
    }
  };

  laySanPham = (id) => {
    let sanPham = this.state.arrProduct.find((item) => item.id === id);
    // if (sanPham) {
    //   this.setState({
    //     ...this.state,
    //     sanPham,
    //   });
    // }
    // ! sử dụng this.ref.current giúp gọi ra các phương thức các thuộc tính nằm trong component được gán ref
    // console.log(this.ref.current.state);
    this.ref.current.setState({
      ...this.ref.current.state,
      values: sanPham,
      activeButton: true
    });

  };

  capNhatSanPham = (sanPham) => {
    let index = this.state.arrProduct.findIndex(
      (item) => item.id === sanPham.id
    );
    if (index !== -1) {
      let newArr = [...this.state.arrProduct];
      newArr[index] = sanPham;
      this.setState({
        arrProduct: newArr,
      });
    }
    // ! xoa form
    this.ref.current.setState({
      ...this.state,
      values: {
        id: "",
        image: "",
        name: "",
        price: "",
        descrip: "",
        type: "",
      },
    });
  };

  render() {
    return (
      <div className="p-5">
        <h1 className="mb-4">Create Product</h1>
        <FormProduct
          ref={this.ref}
          themSanPham={this.themSanPham}
          capNhatSanPham={this.capNhatSanPham}
        />
        <div>
          <table cellPadding={20} className="form-table w-100 mb-5">
            <thead className="bg-dark text-white">
              <tr>
                <td>Id</td>
                <td>Image</td>
                <td>Name</td>
                <td>Price</td>
                <td>Description</td>
                <td>Type</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {this.state.arrProduct.map((item, index) => {
                const { id, image, type, name, price, descrip } = item;
                return (
                  <tr key={index}>
                    <td>{id}</td>
                    <td>
                      <img src={image} alt="" className="img-fluid" />
                    </td>
                    <td>{name}</td>
                    <td>{price}</td>
                    <td>{descrip}</td>
                    <td>{type}</td>
                    <td className="position-relative">
                      <div id="actions" className="d-flex">
                        <button
                          className="btn btn-danger me-3"
                          onClick={() => {
                            this.xoaSanPham(id);
                          }}
                          title="Xoa San Pham"
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button>
                        <button
                          className="btn btn-warning text-white"
                          onClick={() => {
                            this.laySanPham(id);
                          }}
                          title="Sua San Pham"
                        >
                          <i className="fa-solid fa-pen-to-square"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
