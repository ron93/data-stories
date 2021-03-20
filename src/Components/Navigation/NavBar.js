import React, {Component } from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="NavbarItems">
    <h1 className="navbar-logo">Data Stories</h1>
    <div className="menu-icon">
    <ul>
              <li>
      <Link to="/">Home </Link>
      </li>
      <li>
      <Link to="/stories">Stories</Link>
      </li>
      </ul>
    </div>
    </nav>
  );
};
