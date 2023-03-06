import React, { Component } from "react";

import { NavLink } from "react-router-dom";

export default class AdminNav extends Component {
  render() {
    return (
      <ul>
        <li>
          <NavLink to="/admin/films">Film</NavLink>
        </li>

        <li>
          <NavLink to="/admin/newfilms">Update Film</NavLink>
        </li>
        <li>
          <NavLink to="/admin/users"> User</NavLink>
        </li>
      </ul>
    );
  }
}
