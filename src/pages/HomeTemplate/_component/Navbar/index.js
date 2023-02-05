import React, { Component } from "react";

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
            <a className="nav-link" href="#">
              Phim
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Các Cụm Rạp
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Liên Hệ
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
