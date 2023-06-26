import React, { Component } from "react";

export default class FormProduct extends Component {
  state = {
    values: {
      id: "",
      image: "",
      name: "",
      price: "",
      descrip: "",
      type: "",
    },
    errors: {
      id: "",
      image: "",
      name: "",
      price: "",
      descrip: "",
      type: "",
    },
    activeButton: true,
  };

  // ! check empty inputs - regex
  checkValidation = (id, newValues, newError, type) => {
    if (newValues[id] === "") {
      newError[id] = `${id} không được để rỗng`;
    } else {
      newError[id] = "";
      // check ký tự số
      // let regexNumber = /[0-9]/g;
      // if (type === "number") {
      //   let result = regexNumber.test(newValues[id]);
      //   console.log("🐉 ~ result:", result);
      //   if(!result) {
      //     newError[id] = `${id} must be a number`;
      //   }
      // }
      switch (type) {
        case "number":
          {
            let regexNumber = /^[0-9]+$/;
            let result = regexNumber.test(newValues[id]);
            // if (!result) {
            //   newError[id] = `${id} must be a number`;
            // }
            newError[id] = result ? "" : `${id} must be a number`;
          }
          break;
        case "letter":
          {
            let regexLetter = /^[a-zA-Z\s]+$/;
            let result = regexLetter.test(newValues[id]);
            // if (!result) {
            //   newError[id] = `${id} must contain only characters`;
            // }
            newError[id] = result ? "" : `${id} must contain only characters`;
          }
          break;
        default:
          break;
      }
    }
  };

  // ! check active button
  checkActiveBtn = () => {
    let valid = false;
    // dung vong lap
    for (let item in this.state.errors) {
      // * ở đây check nếu thuộc tính trong error mà có chuỗi hoặc các input chưa có dữ liệu thì sẽ set valid thành true
      if (this.state.errors[item] !== "" || this.state.values[item] === "") {
        valid = true;
      }
    }
    return valid;
  };

  // ! get user inputs
  getValueInput = (event) => {
    let { value, id } = event.target;
    // this.setState({
    //   [id]: value,
    // });
    let newValues = this.state.values;
    newValues[id] = value;

    // ! validation: check rỗng, check ký tự và check số
    // todo: check rỗng
    let newError = this.state.errors;
    // todo: lấy data-attribute được tạo ra dùng event.target.getAttribute
    let type = event.target.getAttribute("data-type");

    this.checkValidation(id, newValues, newError, type);

    // ! check nguoi dung da fill het du lieu vao input
    // ! check validation: check nguoi dung khong bi loi, cu the cac thuoc tinh trong error cua state se la chuoi rong
    let valid = this.checkActiveBtn();

    this.setState({
      values: newValues,
      errors: newError,
      activeButton: valid,
    });
  };

  handleSubmit = (event) => {
    // ! run a method to prevent the browser to reload the page
    event.preventDefault();
    // ! ở đây dùng phương thức thêm sản phẩm được truyền từ props để giúp arrProduct trên component product list có thể lấy được sản phẩm
    let newArr = { ...this.state.values };
    this.props.themSanPham(newArr);
    // ! xoa form
    this.setState({
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
    const { id, descrip, image, name, type, price } = this.state.errors;
    return (
      <>
        <form
          className="card text-white bg-success bg-opacity-50 mb-5"
          onSubmit={this.handleSubmit}
        >
          <h2 className="bg-secondary text-warning p-3">Product Info</h2>
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <label className="mb-3" htmlFor="id">
                  ID
                </label>
                <input
                  className="form-control mb-3"
                  type="text"
                  id="id"
                  // onChange={(event) => {
                  //   let data = event.target.value;
                  //   console.log(data);
                  //   this.setState({
                  //     id: data,
                  //   })
                  // }}
                  onChange={this.getValueInput}
                  value={this.state.values.id}
                />
                <p className="text-danger fst-italic">{id}</p>
              </div>
              <div className="col-6">
                <label className="mb-3" htmlFor="image">
                  Image
                </label>
                <input
                  className="form-control mb-3"
                  type="text"
                  id="image"
                  onChange={this.getValueInput}
                  value={this.state.values.image}
                />
                <p className="text-danger fst-italic">{image}</p>
              </div>
              <div className="col-6">
                <label className="mb-3" htmlFor="name">
                  Name
                </label>
                <input
                  className="form-control mb-3"
                  type="text"
                  id="name"
                  onChange={this.getValueInput}
                  data-type="letter"
                  value={this.state.values.name}
                />
                <p className="text-danger fst-italic">{name}</p>
              </div>
              <div className="col-6">
                <label className="mb-3" htmlFor="type">
                  Product Type
                </label>
                <input
                  className="form-control mb-3"
                  type="text"
                  id="type"
                  onChange={this.getValueInput}
                  value={this.state.values.type}
                />
                <p className="text-danger fst-italic">{type}</p>
              </div>
              <div className="col-6">
                <label className="mb-3" htmlFor="price">
                  Price
                </label>
                <input
                  className="form-control mb-3"
                  type="text"
                  id="price"
                  onChange={this.getValueInput}
                  data-type="number"
                  value={this.state.values.price}
                />
                <p className="text-danger fst-italic">{price}</p>
              </div>
              <div className="col-6">
                <label className="mb-3" htmlFor="descrip">
                  Description
                </label>
                <input
                  className="form-control mb-3"
                  type="text"
                  id="descrip"
                  onChange={this.getValueInput}
                  value={this.state.values.descrip}
                />
                <p className="text-danger fst-italic">{descrip}</p>
              </div>
            </div>
          </div>
          <div className="card-footer bg-secondary p-3">
            <button
              type="submit"
              className="btn btn-primary me-3"
              disabled={this.state.activeButton}
            >
              Tạo sản phẩm
            </button>
            <button
              type="button"
              className="btn btn-warning text-white"
              onClick={() => {
                let sanPham = { ...this.state.values };
                this.props.capNhatSanPham(sanPham);
              }}
            >
              Cập nhật
            </button>
          </div>
        </form>
      </>
    );
  }
}
