import React, { useEffect } from "react";
import Navbar from "../components/common/Navigation/navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/Navigation/sidebar";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, getProductsStatus } from "../Redux/Slices/products";

const Home = () => {
  const dispatch = useDispatch();
  const status = useSelector(getProductsStatus);
  // status === "succeeded" && console.log(products);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  // if (status === "loading") return <div>Loading...</div>;
  // if (status === "failed") return <div>Failed to load products</div>;

  return (
    <>
      <Navbar />
      <Sidebar />
      <Outlet />
    </>
  );
};

export default Home;
