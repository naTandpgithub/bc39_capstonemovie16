import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import AdminNav from "./_component/Navbar";

export default class AdminTemplate extends Component {
  render() {
    return (
      <div>
        <AdminNav />
        <Outlet />
      </div>
    );
  }
}
