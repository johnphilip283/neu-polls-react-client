import React, { useState, useEffect } from "react";
import HeadingComponent from "../header/HeadingComponent";
import LoggedInHomeScreenComponent from "./LoggedInHomeScreenComponent";
import AnonHomeScreenComponent from "./AnonHomeScreenComponent";
import "./homescreen.scss";

const HomeScreenComponent = ({ history }) => {

  const jwt = window.localStorage.getItem("token") || "";
  
  return (
    <div class="container-home">
      <HeadingComponent/>
      { jwt ? <LoggedInHomeScreenComponent/> : <AnonHomeScreenComponent/> }
    </div>
  );
};

export default HomeScreenComponent;
