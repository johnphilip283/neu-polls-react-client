import React from "react";
import "./heading.scss";

const HeadingComponent = ({}) => {

  return (
    <nav className="navbar p-3">
      <span className="brand">NEU Polls</span>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/privacy">Privacy</a>
          </li>
        </ul>
    </nav>
  );
};

export default HeadingComponent;
