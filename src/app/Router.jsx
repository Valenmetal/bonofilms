import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../Pages/Layout";
import Index from "../Pages/Index";
import Filmmaking from "../Pages/Filmmaking";
import Videoediting from "../Pages/Videoediting";
import Animation from "../Pages/Animation";
import Colorgrading from "../Pages/Colorgrading";
import VideoDetailFilm from "../Pages/VideoDetailFilm";
import VideoDetailVideo from "../Pages/VideoDetailVideo";
import VideoDetailAnimation from "../Pages/VideoDetailAnimation";
import VideoDetailColor from "../Pages/VideoDetailColor";
import ScrollToTop from "../components/ScrollToTop";
const Router = () => {
   return (
      <BrowserRouter>
         <ScrollToTop />
         <Routes>
            <Route element={<Layout />}>
               <Route index element={<Index />} />
               <Route path="/filmmaking" element={<Filmmaking />} />
               <Route path="/filmmaking/:videoId" element={<VideoDetailFilm />} />
               <Route path="/videoediting" element={<Videoediting />} />
               <Route path="/videoediting/:videoId" element={<VideoDetailVideo />} />
               <Route path="/animation" element={<Animation />} />
               <Route
                  path="/animation/:videoId"
                  element={<VideoDetailAnimation />}
               />
               <Route path="/colorgrading" element={<Colorgrading />} />
               <Route path="/colorgrading/:videoId" element={<VideoDetailColor />} />
            </Route>
         </Routes>
      </BrowserRouter>
   );
};

export default Router;
