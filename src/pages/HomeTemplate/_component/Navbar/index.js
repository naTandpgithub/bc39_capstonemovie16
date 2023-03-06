import { NavLink } from "react-router-dom";
import React from 'react'
import { MoreOutlined } from '@ant-design/icons';

export default function index() {
  return (
    <header className="fixed-top">
      <nav className="navbar navbar-expand-lg">
        {/* Brand */}
        <a className="navbar-brand text-center d-flex align-items-center" href="/">
          <span>CYBER</span>
          <img src="https://i.imgur.com/lC22izJ.png"/>
          <span>CINEMA</span>
        </a>
        {/* <!-- Toggler/collapsibe Button --> */}
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span ><MoreOutlined /></span>
        </button>
        {/* Links */}
        <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
           {localStorage.getItem("userLogin") ?
          <ul className="navbar-nav  d-flex justify-content-center">
            <li className="nav-item home">
              <a className="nav-link">
                <span>Hi,</span> {JSON.parse(localStorage.getItem("userLogin")).taiKhoan}
              </a>
              <div className="homeNavbar">
                <NavLink className="nav-link" to="/infoUser">
                  Account
                </NavLink>
                <a className="nav-link" href="" onClick={() => { localStorage.removeItem("userLogin") }}>
                  Sign out
                </a>
              </div>
            </li>
          </ul> :
          <ul className="navbar-nav d-flex justify-content-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Logn in
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/register">
                Register
              </NavLink>
            </li>
          </ul>
        }
        </div>
      </nav>
    </header>
  )
}

