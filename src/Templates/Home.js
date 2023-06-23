import React, { Component } from "react";
import { NavLink, Navigate, Outlet } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <div className="container">
            <NavLink className="navbar-brand" to="">
              Navbar
            </NavLink>
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            />
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                <li className="nav-item">
                  {/* <a className="nav-link active" href="/home" aria-current="page">
                  Home <span className="visually-hidden">(current)</span>
                </a> */}
                  <button
                    className="btn btn-danger text-white"
                    onClick={() => {
                      // * thẻ Navigate giúp chuyển hướng người dùng tới các path theo mong muốn
                      <Navigate to="/" />;
                    }}
                  >
                    Go Home
                  </button>
                </li>
                <li className="nav-item">
                  {/* <a className="nav-link" href="/home/detail">
                  Detail
                </a> */}
                  {/* thuộc tính to giúp chuyển hướng tới các component được định nghĩa trong route mà không bị reload lại trang */}
                  <NavLink
                    className="nav-link"
                    to="/detail"
                    style={({ isActive }) =>
                      isActive ? { color: "white", backgroundColor: "red" } : {}
                    }
                  >
                    Detail
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    // className={({ isActive }) =>
                    //   isActive ? "nav-link bg-danger text-white" : "nav-link"
                    // }
                    to="/login"
                    className="nav-link"
                    style={({ isActive }) =>
                      isActive ? { color: "white", backgroundColor: "red" } : {}
                    }
                  >
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/form"
                    className="nav-link"
                    style={({ isActive }) =>
                      isActive ? { color: "white", backgroundColor: "red" } : {}
                    }
                  >
                    React Form
                  </NavLink>
                </li>
              </ul>
              <form className="d-flex my-2 my-lg-0">
                <input
                  className="form-control me-sm-2"
                  type="text"
                  placeholder="Search"
                />
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>

        {/* Outlet đóng vai trò hiển thị các component của route con nằm bên trong route chính đang chứa component home */}
        <Outlet />
        <footer className="p-5 bg-black text-center text-white fs-3">
          Footer
        </footer>
      </div>
    );
  }
}
