import video from "../assets/vid/banners/Banner Home FILMMAKING 2.mp4";
import AGUS from "../assets/vid/filmmaking/AGUS.mov";
import ClaseMADA from "../assets/vid/filmmaking/Clase MADA.mov";
import Danza_vertical from "../assets/vid/filmmaking/Danza vertical 1.mov";
import Danza_vertical_2 from "../assets/vid/filmmaking/Danza vertical 2.mov";
import Danza_vertical_3 from "../assets/vid/filmmaking/Danza vertical 3_00087406.mov";
import EmiliaCafe from "../assets/vid/filmmaking/Emilia Cafe.mov";
import FPM from "../assets/vid/filmmaking/FPM 22.mov";
import Handball from "../assets/vid/filmmaking/Handball.mov";
import PASTA from "../assets/vid/filmmaking/MAD PASTA.mp4";
import Rio from "../assets/vid/filmmaking/MADA Rio.mov";
import Pancho from "../assets/vid/filmmaking/Pancho Publicidad.mov";
import SEBA from "../assets/vid/filmmaking/SEBA.mov";
import reel from "../assets/vid/filmmaking/Bonofilms reel 2024.mp4";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Filmmaking() {
   useEffect(() => {
      const handlePointerMove = (e) => {
         e.target.setAttribute("controls", true);
      };

      const handlePointerOut = (e) => {
         e.target.removeAttribute("controls");
      };

      const videoElements = document.querySelectorAll("#filmmaking_video");
      videoElements.forEach((video) => {
         video.addEventListener("pointermove", handlePointerMove);
         video.addEventListener("pointerout", handlePointerOut);
      });

      return () => {
         videoElements.forEach((video) => {
            video.removeEventListener("pointermove", handlePointerMove);
            video.removeEventListener("pointerout", handlePointerOut);
         });
      };
   }, []);

   useGSAP(
      () => {
         gsap.from(".work_title", {
            opacity: 0,
            y: 100,
         });
         gsap.from(".subtitle", {
            delay: 0.1,
            opacity: 0,
            y: 100,
         });

         gsap.from("#work1, #work2", {
            delay: 0.2,
            opacity: 0,
            y: 100,
         });
      },
      { scope: ".work_container" }
   );

   return (
      <section className="page_section">
         <div className="work_container">
            <video
               autoPlay
               muted
               loop
               src={video}
               className="banner_filmmaking"></video>

            <h1 className="work_title">Filmmaking</h1>
            <h1 className="work_title work_title_stroke">Filmmaking</h1>

            <div style={{ marginTop: 300 }} className="filmmaking_work_grid">
               <div className="wraper">
                  <div id="work11" className="img_container">
                     <video id="filmmaking_video" muted loop src={Handball}></video>
                  </div>
                  <div id="work12" className="img_container">
                     <video id="filmmaking_video" muted loop src={Rio}></video>
                  </div>
               </div>
            </div>

            <div id="reel" className="reel">
               <p className="subtitle">REEL 2024</p>
               <p className="subtitle_stroke">REEL 2024</p>
               <video
                  className="reel_video"
                  autoPlay
                  muted
                  loop
                  id="videoediting_video"
                  src={reel}></video>
            </div>

            <div className="filmmaking_work_grid">
               <div className="wraper">
                  <div id="work1" className="vertical_video">
                     <video
                        muted
                        loop
                        id="filmmaking_video"
                        src={Danza_vertical_2}></video>
                  </div>
                  <div id="work2" className="img_container">
                     <video
                        muted
                        loop
                        id="filmmaking_video"
                        src={EmiliaCafe}></video>
                  </div>
               </div>
               <div className="wraper">
                  <div id="work3" className="img_container">
                     <video muted loop id="filmmaking_video" src={FPM}></video>
                  </div>
                  <div id="work4" className="vertical_video">
                     <video
                        muted
                        loop
                        id="filmmaking_video"
                        src={Danza_vertical_3}></video>
                  </div>
               </div>
               <div className="wraper">
                  <div id="work5" className="img_container">
                     <video muted loop id="filmmaking_video" src={PASTA}></video>
                  </div>
                  <div id="work6" className="img_container">
                     <video muted loop id="filmmaking_video" src={Pancho}></video>
                  </div>
               </div>
               <div className="wraper">
                  <div id="work7" className="img_container">
                     <video muted loop id="filmmaking_video" src={ClaseMADA}></video>
                  </div>
                  <div id="work8" className="vertical_video">
                     <video
                        muted
                        loop
                        id="filmmaking_video"
                        src={Danza_vertical}></video>
                  </div>
               </div>

               <div className="wraper">
                  <div id="work9" className="img_container">
                     <video muted loop id="filmmaking_video" src={SEBA}></video>
                  </div>
                  <div id="work10" className="img_container">
                     <video muted loop id="filmmaking_video" src={AGUS}></video>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
