import React from "react";
import "./heading.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const HeadingComponent = ({}) => {

  return (
    <nav className="navbar p-3 heading">
      <span className="brand">NEU Polls</span>
      <ul className="navbar-nav">
        <form className="form-inline">
            <input className="form-control" type="search" placeholder="Search"/>
            <button type="button" className="search-button"><FontAwesomeIcon icon={faSearch}/></button>
        </form>

      </ul>
    </nav>
  );
};

export default HeadingComponent;
