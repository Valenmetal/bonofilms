import video from "../assets/vid/banners/Banner Home COLORGRADING.mp4";
import colorgrading from "../assets/vid/colorgrading/Clase MADA.mov";
import colorgrading2 from "../assets/vid/colorgrading/MADA Rio.mov";
import colorgrading3 from "../assets/vid/colorgrading/Emilia Cafe.mov";
import colorgrading4 from "../assets/vid/colorgrading/Handball.mov";
import colorgrading5 from "../assets/vid/colorgrading/Pancho Publicidad.mov";

import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Colorgrading = () => {
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

            <p className="subtitle"></p>

            <div className="work_grid">
               <div id="work1" className="img_container">
                  <video
                     autoPlay
                     controls
                     muted
                     loop
                     id="colorgrading_video"
                     src={colorgrading}></video>

                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Officiis, dolorem.
                  </p>
               </div>
               <div id="work2" className="img_container">
                  <video
                     autoPlay
                     controls
                     muted
                     loop
                     id="colorgrading_video"
                     src={colorgrading2}></video>

                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Officiis, dolorem.
                  </p>
               </div>
               <div id="work3" className="img_container">
                  <video
                     autoPlay
                     controls
                     muted
                     loop
                     id="colorgrading_video"
                     src={colorgrading3}></video>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Officiis, dolorem.
                  </p>
               </div>
               <div id="work4" className="img_container">
                  <video
                     autoPlay
                     controls
                     muted
                     loop
                     id="colorgrading_video"
                     src={colorgrading4}></video>

                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Officiis, dolorem.
                  </p>
               </div>
               <div id="work5" className="img_container">
                  <video
                     autoPlay
                     controls
                     muted
                     loop
                     id="colorgrading_video"
                     src={colorgrading5}></video>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Officiis, dolorem.
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Colorgrading;
