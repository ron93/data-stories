import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
    <ul>
              <li>
      <Link to="/">Home </Link>
      </li>
      <li>
      <Link to="/stories">Stories</Link>
      </li>
      </ul>
    </div>
  );
};
