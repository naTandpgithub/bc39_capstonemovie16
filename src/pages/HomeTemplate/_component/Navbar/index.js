import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export default class NavbarHome extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        {/* Brand */}
        <a className="navbar-brand" href="#">
          Logo
        </a>
        {/* Links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Phim
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/cinema">
              Các Cụm Rạp
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">
              Liên Hệ
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
