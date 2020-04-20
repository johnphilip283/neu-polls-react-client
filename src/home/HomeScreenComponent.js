import React, { useState, useEffect } from "react";
import HeadingComponent from "../header/HeadingComponent";
import LoggedInHomeScreenComponent from "./LoggedInHomeScreenComponent";
import AnonHomeScreenComponent from "./AnonHomeScreenComponent";
import "./homescreen.scss";

const HomeScreenComponent = ({ history }) => {

  const jwt = window.localStorage.getItem("token") || "";

  // const data = [
  //   {
  //     name: "Page A",
  //     uv: 4000,
  //     pv: 2400,
  //   },
  //   {
  //     name: "Page B",
  //     uv: 3000,
  //     pv: 1398,
  //   },
  //   {
  //     name: "Page C",
  //     uv: 2000,
  //     pv: 9800,
  //   },
  //   {
  //     name: "Page D",
  //     uv: 2780,
  //     pv: 3908,
  //   },
  //   {
  //     name: "Page E",
  //     uv: 1890,
  //     pv: 4800,
  //   },
  //   {
  //     name: "Page F",
  //     uv: 2390,
  //     pv: 3800,
  //   },
  //   {
  //     name: "Page G",
  //     uv: 3490,
  //     pv: 4300,
  //   },
  // ];

  // return (
  //   <BarChart width={730} height={250} data={data} layout="horizontal">
  //     <Bar dataKey="pv" fill="#8884d8" layout="horizontal"/>
  //   </BarChart>
  // );
  return (
    <div class="container-home">
      <HeadingComponent/>
      { jwt ? <LoggedInHomeScreenComponent/> : <AnonHomeScreenComponent/> }
    </div>
  );
};

export default HomeScreenComponent;
