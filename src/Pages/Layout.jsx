/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar";
import React from "react";
import Footer from "../components/Footer";
import CustomCursor from "../components/ui/CustomCursor";

const Layout = () => {
   return (
      <div>
         <CustomCursor />
         <NavBar />
         <Outlet />
         <Footer />
      </div>
   );
};

export default Layout;
