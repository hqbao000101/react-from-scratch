// ! rfc - create functional component
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Templates/Home";
// import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import Detail from "./Pages/Detail";
import SideBar from "./Templates/SideBar";
import Admin from "./Templates/Admin";
import Page404 from "./Pages/Page404";
import Dashboard from "./Pages/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* thuộc tính index giúp xác định component nào sẽ hiển thị lên khi lần đầu load trang */}
        {/* thuộc tính path giúp xác định đường dẫn tới component */}
        {/* thuộc tính element giúp xác định component nào sẽ hiển thị khi đi tới đường dẫn đó */}
        {/* <Route index element={<HomePage />} /> */}
        {/* <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail" element={<Detail />} /> */}
        <Route path="/home" element={<Home />}>
          <Route index element={<SideBar />} />
          <Route path="detail" element={<Detail />}>
            <Route path=":id" element={<Detail />} />
          </Route>
          <Route path="login" element={<Login />} />
          {/* Sử dụng path="*" giúp chuyển hướng người dùng đến trang not found hoặc trang nào đó do mình định nghĩa khi route không tồn tại */}
          {/* <Route path="page-not-found" element={<Page404 />} /> */}
          <Route path="*" element={<Page404 />} />
        </Route>
        <Route path="/admin" element={<Admin />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
