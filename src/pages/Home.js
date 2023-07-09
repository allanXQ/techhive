import React from "react";
import Navbar from "../components/common/Navigation/navbar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Outlet />
    </>
  );
};

export default Home;
