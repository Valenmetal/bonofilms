import React from "react"
import { HashRouter, Route, Routes } from "react-router-dom"
import Layout from "../Pages/Layout"
import Index from "../Pages/Index"
import Filmmaking from "../Pages/Filmmaking"
import Videoediting from "../Pages/Videoediting"
import Animation from "../Pages/Animation"
import Colorgrading from "../Pages/Colorgrading"
import VideoDetailFilm from "../Pages/VideoDetailFilm"
import VideoDetailVideo from "../Pages/VideoDetailVideo"
import VideoDetailAnimation from "../Pages/VideoDetailAnimation"
import VideoDetailColor from "../Pages/VideoDetailColor"
import ScrollToTop from "../components/ScrollToTop"
import Youtube from "../Pages/Categories/Youtube"
import YoutubeVlogs from "../Pages/Categories/YoutubeVlogs"
import CoursesTutorials from "../Pages/Categories/CoursesTutorials"
import Podcasts from "../Pages/Categories/Podcasts"
import Sports from "../Pages/Categories/Sports"
import Corporate from "../Pages/Categories/Corporate"
import Food from "../Pages/Categories/Food"
import Dance from "../Pages/Categories/Dance"
import Docummentary from "../Pages/Categories/Docummentary"
import Reels from '../Pages/Categories/Reels';
import Wedding from '../Pages/Categories/Wedding';

const Router = () => {
   return (
      <HashRouter>
         <ScrollToTop />
         <Routes>
            <Route element={<Layout />}>
               <Route index element={<Index />} />

               <Route path="/filmmaking" element={<Filmmaking />} />
               <Route path="/videoediting" element={<Videoediting />} />
               <Route path="/animation" element={<Animation />} />
               <Route path="/colorgrading" element={<Colorgrading />} />
               // Video Detail Routes
               <Route path="/filmmaking/:videoId" element={<VideoDetailFilm />} />
               <Route path="/videoediting/:videoId" element={<VideoDetailVideo />} />
               <Route path="/animation/:videoId" element={<VideoDetailAnimation />} />
               <Route path="/colorgrading/:videoId" element={<VideoDetailColor />} />

               // Categories Routes
               <Route path="/youtube" element={<Youtube />} />
               <Route path="/youtubevlogs" element={<YoutubeVlogs />} />
               <Route path="/coursesandtutorials" element={<CoursesTutorials />} />
               <Route path="/podcasts" element={<Podcasts />} />
               <Route path="/sportsandmovement" element={<Sports />} />
               <Route path="/corporate" element={<Corporate />} />
               <Route path="/food" element={<Food />} />
               <Route path="/dance" element={<Dance />} />
               <Route path="/docummentary" element={<Docummentary />} />
               <Route path="/reels" element={<Reels />} />
               <Route path="/wedding" element={<Wedding />} />
            </Route>
         </Routes>
      </HashRouter>
   )
}

export default Router
