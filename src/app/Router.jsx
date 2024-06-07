import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../Pages/Layout";
import Index from "../Pages/Index";
import Filmmaking from "../Pages/Filmmaking";
import Videoediting from "../Pages/Videoediting";
import Animation from "../Pages/Animation";
import Colorgrading from "../Pages/Colorgrading";
import Team from "../Pages/Team";
import ScrollToTop from "../components/ScrollToTop";
const Router = () => {
   return (
      <BrowserRouter>
         <ScrollToTop />
         <Routes>
            <Route element={<Layout />}>
               <Route index element={<Index />} />
               <Route path="/filmmaking" element={<Filmmaking />} />
               <Route path="/videoediting" element={<Videoediting />} />
               <Route path="/animation" element={<Animation />} />
               <Route path="/colorgrading" element={<Colorgrading />} />
               <Route path="/team" element={<Team />} />
            </Route>
         </Routes>
      </BrowserRouter>
   );
};

export default Router;
