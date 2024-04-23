/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar";
import React from "react";
import Footer from "../components/Footer";

const Layout = () => {
   return (
      <div>
         <NavBar />
         <Outlet />
         <Footer />
      </div>
   );
};

export default Layout;
