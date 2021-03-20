import React, { useEffect, useState,useCallback } from "react";
import { NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Menuitems } from "./menuItems";
import "./Navbar.css";
import {Button} from '../Button/Button';


export const NavBar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = (state) => {
      setClicked(!clicked );
      // console.log(clicked);
 
  };


  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo"><a>Data  Stories</a></h1>
      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
        {Menuitems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
      <Button>Sign Up</Button>
    </nav>
  );
};
