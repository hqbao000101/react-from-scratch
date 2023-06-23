import React, { Component } from "react";
import FormProduct from "./FormProduct";

export default class ProductList extends Component {
  render() {
    return (
      <div className="p-5">
        <h1 className="mb-4">Create Product</h1>
        <FormProduct />
        <div>
          <table cellPadding={20} className="form-table">
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
              <tr>
                <td>01</td>
                <td>
                  <img
                    src="https://picsum.photos/200"
                    alt=""
                    className="img-fluid"
                  />
                </td>
                <td>Samsung</td>
                <td>30</td>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  aut beatae deserunt repudiandae exercitationem consequuntur
                  iure non ab magnam animi. Velit totam sequi laboriosam
                  voluptatem!
                </td>
                <td>Mobile</td>
                <td className="d-flex">
                  <button className="btn btn-danger me-3">
                    <i className="fa-solid fa-trash"></i>
                  </button>
                  <button className="btn btn-primary">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
