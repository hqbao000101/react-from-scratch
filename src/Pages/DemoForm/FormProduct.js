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
            let regexLetter = /^[a-zA-Z]+$/;
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

    // ! active button
    if (newError[id] === "") {
      this.setState({
        activeButton: false,
      });
    }

    this.setState({
      values: newValues,
      errors: newError,
    });
  };

  handleSubmit = (event) => {
    // ! run a method to prevent the browser to reload the page
    event.preventDefault();
    console.log(this.state);
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
            <button type="submit" className="btn btn-warning text-white">
              Cập nhật
            </button>
          </div>
        </form>
      </>
    );
  }
}
