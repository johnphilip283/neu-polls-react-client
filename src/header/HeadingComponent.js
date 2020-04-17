import React from "react";
import "./heading.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faSearch } from '@fortawesome/free-solid-svg-icons'

const HeadingComponent = ({}) => {

  
  return (
    <nav className="navbar p-3">
      <span className="brand">NEU Polls</span>
      <ul className="navbar-nav">

        <form class="form-inline">
            <input class="form-control" type="search" placeholder="Search"/>
            <button type="button" className="search-button"><FontAwesomeIcon icon={faSearch}/></button>
        </form>

          {/* <button
            type="button"
            class="searchButton__1XY_w"
            aria-label="open form to search"
            aria-controls="js-header-search"
            aria-expanded="false"
          >
            <svg
              viewBox="0 0 38 38"
              role="img"
              aria-labelledby="js-search-button-desktop"
              class="searchIcon__z-gd4 searchIcon__1dTDa"
            >
              <title id="js-search-button-desktop">Search BuzzFeed</title>
              <use href="#search-icon">
                <svg id="search-icon" width="38" height="38">
                  <path d="M24.5 1C17.6 1 12 6.6 12 13.5c0 2.7.9 5.2 2.4 7.3L.6 34.6c-.8.8-.8 2 0 2.8.8.8 2 .8 2.8 0l13.8-13.8c2.1 1.5 4.6 2.4 7.3 2.4C31.4 26 37 20.4 37 13.5S31.4 1 24.5 1zm0 21c-4.7 0-8.5-3.8-8.5-8.5S19.8 5 24.5 5 33 8.8 33 13.5 29.2 22 24.5 22z"></path>
                </svg>
              </use>
            </svg>
          </button> */}

      </ul>
    </nav>
  );
};

export default HeadingComponent;
