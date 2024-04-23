import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../Pages/Layout";
import Index from "../Pages/Index";
import Filmmaking from "../Pages/Filmmaking";
import Videoediting from "../Pages/Videoediting";
import Animation from "../Pages/Animation";
import Colorgrading from "../Pages/Colorgrading";
import Team from "../Pages/Team";
/*import Categories from "../Pages/Categories"; */

const Router = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route element={<Layout />}>
               <Route index element={<Index />} />
               <Route path="/filmmaking" element={<Filmmaking />} />
               <Route path="/videoediting" element={<Videoediting />} />
               <Route path="/animation" element={<Animation />} />
               <Route path="/colorgrading" element={<Colorgrading />} />
               <Route path="/team" element={<Team />} />
               {/* <Route path="/categorias" element={<Categories />} />
                  <Route
                     path="/categorias/:categoryId"
                     element={<ItemListContainer />}
                  /> */}
            </Route>
         </Routes>
      </BrowserRouter>
   );
};

export default Router;
