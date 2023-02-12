import React, { Component } from "react";

import { NavLink } from "react-router-dom";

export default class AdminNav extends Component {
  render() {
    return (
      <ul>
        <li>
          <NavLink to="/films">Upload Film</NavLink>
        </li>
        <li>
          <NavLink to="/users">Add User</NavLink>
        </li>
      </ul>
    );
  }
}
