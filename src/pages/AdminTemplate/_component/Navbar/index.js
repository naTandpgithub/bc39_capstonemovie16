import React, { Component } from "react";

import { NavLink } from "react-router-dom";

export default class AdminNav extends Component {
  render() {
    return (
      <ul>
        <li>
          <NavLink to="/admin/films">Upload Film</NavLink>
        </li>
        <li>
          <NavLink to="/admin/users">Add User</NavLink>
        </li>
      </ul>
    );
  }
}
