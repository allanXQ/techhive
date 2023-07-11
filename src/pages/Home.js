import React, { useEffect } from "react";
import Navbar from "../components/common/Navigation/navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/Navigation/sidebar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Outlet />
    </>
  );
};

export default Home;
