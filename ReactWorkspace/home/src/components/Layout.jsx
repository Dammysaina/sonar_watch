import React, { useLayoutEffect } from "react";
import Header from "../components/Navbar"
import Footer from "../components/Footer"
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;