import React from "react";
import { Link } from "react-router-dom";

export const StoryList = () => {
  return (
    <div>
    <ul>
              <li>
      <Link to="/stories/#1">World Population </Link>
      </li>
      <li>
      <Link to="/stories/#2">Stories</Link>
      </li>
      </ul>
    </div>
  );
};
