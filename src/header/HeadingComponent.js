import React from "react";
import "./heading.scss";

const HeadingComponent = ({ }) => {

  const jwt = window.localStorage.getItem("token") || '';

  const logOut = () => window.localStorage.removeItem("token");
   
  return (
    <nav className="navbar p-3 heading ">
      <span className="brand">NEU Polls</span>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/privacy">Privacy</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/profile'>Profile</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/about'>About</a>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
          { jwt ? 
          <a className="nav-link login-logout" href="/login"
              onClick={logOut}>Log out</a>
           : 
           <a className="nav-link login-logout" href="/login">Log in</a>
           }
          </li>
        </ul>
    </nav>
  );
};

export default HeadingComponent;
