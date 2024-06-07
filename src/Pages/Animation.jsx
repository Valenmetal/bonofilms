import React from "react";
import video from "../assets/vid/banners/Banner Home ANIMACION.mp4";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Danza_vertical_2 from "../assets/vid/filmmaking/Danza vertical 2.mov";
import EmiliaCafe from "../assets/vid/filmmaking/Emilia Cafe.mov";
import { useEffect } from "react";
const Animation = () => {
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

         gsap.from("#work1, #work2", {
            delay: 0.2,
            opacity: 0,
            y: 100,
         });
         gsap.from("#work3, #work4", {
            scrollTrigger: {
               trigger: "#work3",
               start: "top bottom",
               end: "top 90%",
               scrub: 1,
            },
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
               id="Animation_title"
               autoPlay
               muted
               loop
               src={video}
               className="banner_Animation"></video>

            <h1 className="work_title">Animation</h1>
            <h1 className="work_title work_title_stroke">Animation</h1>

            <div className="work_grid">
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
            </div>
         </div>
      </section>
   );
};

export default Animation;
