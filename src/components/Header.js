import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">GDSC MoviesWatchList</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/">What I want to watch!</Link>
            </li>

            <li>
              <Link to="/watched">I've watched these!</Link>
            </li>

            <li>
              <Link to="/add" className="btn btn-main">
                + Add Movie
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
