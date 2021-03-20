import React, { useEffect, useState,useCallback } from "react";
import { NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Menuitems } from "./menuItems";
import "./Navbar.css";
const state =false;

export const NavBar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = (state) => {
      setClicked(!clicked );
      // console.log(clicked);
 
  };


  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">Data Stories</h1>
      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul>
        {Menuitems.map((item, index) => {
          return (
            <li key={index}>
              <a className={NavItem.className} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
