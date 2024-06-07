import video from "../assets/vid/banners/Banner Home COLORGRADING.mp4";
import colorgrading from "../assets/vid/filmmaking/Clase MADA.mov";
import colorgrading2 from "../assets/vid/filmmaking/MADA Rio.mov";
import colorgrading3 from "../assets/vid/filmmaking/Emilia Cafe.mov";
import colorgrading4 from "../assets/vid/filmmaking/Handball.mov";
import colorgrading5 from "../assets/vid/filmmaking/Pancho Publicidad.mov";
import colorgrading6 from "../assets/vid/filmmaking/MAD PASTA.mp4";

import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";

const Colorgrading = () => {
   useEffect(() => {
      const handlePointerMove = (e) => {
         e.target.setAttribute("controls", true);
      };

      const handlePointerOut = (e) => {
         e.target.removeAttribute("controls");
      };

      const videoElements = document.querySelectorAll("#colorgrading_video");
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

         gsap.from("#work1, #work2", {
            delay: 0.2,
            opacity: 0,
            y: 100,
         });
         /* gsap.from("#work3, #work4", {
            scrollTrigger: {
               trigger: "#work3",
               start: "top bottom",
               end: "top 90%",
               scrub: 1,
            },
            opacity: 0,
            y: 100,
         }); */
      },
      { scope: ".work_container" }
   );

   return (
      <section className="page_section">
         <div className="work_container">
            <video
               id="Colorgrading_title"
               autoPlay
               muted
               loop
               src={video}
               className="banner_Colorgrading"></video>

            <h1 className="work_title">Colorgrading</h1>
            <h1 className="work_title work_title_stroke">Colorgrading</h1>

            <div className="work_grid">
               <div className="wraper">
                  <div id="work1" className="img_container">
                     <video
                        muted
                        loop
                        id="colorgrading_video"
                        src={colorgrading2}></video>
                  </div>
                  <div id="work2" className="img_container">
                     <video
                        muted
                        loop
                        id="colorgrading_video"
                        src={colorgrading}></video>
                  </div>
               </div>
               <div id="work3" className="img_container">
                  <video
                     muted
                     loop
                     id="colorgrading_video"
                     src={colorgrading4}></video>
               </div>
               <div className="wraper">
                  <div id="work4" className="img_container">
                     <video
                        muted
                        loop
                        id="colorgrading_video"
                        src={colorgrading3}></video>
                  </div>
                  <div id="work5" className="img_container">
                     <video
                        muted
                        loop
                        id="colorgrading_video"
                        src={colorgrading5}></video>
                  </div>
               </div>
               <div id="work6" className="img_container">
                  <video
                     muted
                     loop
                     id="colorgrading_video"
                     src={colorgrading6}></video>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Colorgrading;
