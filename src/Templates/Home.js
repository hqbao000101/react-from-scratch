import React, { Component } from "react";
import { NavLink, Navigate, Outlet } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
          <div className="container">
            <NavLink className="navbar-brand" to="/home">
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
                      <Navigate to="/home" />;
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
                  <NavLink className="nav-link" to="/home/detail">
                    Detail
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    // className={({ isActive }) =>
                    //   isActive ? "nav-link bg-danger text-white" : "nav-link"
                    // }
                    className="nav-link"
                    to="/home/login"
                    style={({ isActive }) =>
                      isActive ? { color: "white", backgroundColor: "red" } : {}
                    }
                  >
                    Login
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/home"
                    id="dropdownId"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdownId">
                    <a className="dropdown-item" href="/home">
                      Action 1
                    </a>
                    <a className="dropdown-item" href="/home">
                      Action 2
                    </a>
                  </div>
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
