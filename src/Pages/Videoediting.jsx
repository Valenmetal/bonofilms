import video from "../assets/vid/banners/Banner Home VIDEOEDITING.mp4";
import videoediting from "../assets/vid/videoediting/Andre Cassiano.mp4";
import videoediting2 from "../assets/vid/videoediting/Fandelier.mp4";
import videoediting3 from "../assets/vid/videoediting/Interview to Tacoma Farmers.mov";
import videoediting4 from "../assets/vid/videoediting/MADA 1.mp4";
import videoediting5 from "../assets/vid/videoediting/MADA 2.mp4";
import videoediting6 from "../assets/vid/videoediting/MADA 3.mp4";
import videoediting7 from "../assets/vid/videoediting/Max Drifting.mov";
import videoediting8 from "../assets/vid/videoediting/Mercy - Lyrics.mp4";
import videoediting9 from "../assets/vid/videoediting/Olive Group Blog.mp4";
import videoediting10 from "../assets/vid/videoediting/Pancho Publi Vertical.mov";
import videoediting11 from "../assets/vid/filmmaking/Pancho Publicidad.mov";
import videoediting13 from "../assets/vid/videoediting/Sprague.mov";
import videoediting14 from "../assets/vid/videoediting/Tacoma Farmers.mp4";
import videoediting15 from "../assets/vid/videoediting/Tapps Electrics.mov";
import videoediting16 from "../assets/vid/videoediting/Zee.elle 1.mp4";
import videoediting17 from "../assets/vid/videoediting/ZOOM TRB.mp4";

import image1 from "../assets/Upwork commets/Andre Cassiano.png";
import image2 from "../assets/Upwork commets/elearning partners.png";
import image3 from "../assets/Upwork commets/Max afterburner.png";
import image4 from "../assets/Upwork commets/Mercy Lyrics.png";
import image5 from "../assets/Upwork commets/SPRAGUE.png";
import image6 from "../assets/Upwork commets/Tacoma Farmers.png";
import image7 from "../assets/Upwork commets/Tapps electric.png";
import image8 from "../assets/Upwork commets/The phases of new construction.png";

import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";

const Videoediting = () => {
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

         gsap.from(".reel", {
            delay: 0.5,
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
               autoPlay
               muted
               loop
               src={video}
               className="banner_videoediting"></video>

            <h1 id="Videoediting_title" className="work_title">
               Videoediting
            </h1>
            <h1 className="work_title work_title_stroke">Videoediting</h1>

            <div className="work_grid">
               <div id="work1" className="img_container">
                  <video
                     controls
                     muted
                     loop
                     id="videoediting_video"
                     src={videoediting}></video>
               </div>
               <div id="work2" className="img_container">
                  <video
                     controls
                     muted
                     loop
                     id="videoediting_video"
                     src={videoediting2}></video>
               </div>
               <div id="work3" className="img_container">
                  <video
                     controls
                     muted
                     loop
                     id="videoediting_video"
                     src={videoediting3}></video>
               </div>
               <div id="work4" className="img_container">
                  <video
                     controls
                     muted
                     loop
                     id="videoediting_video"
                     src={videoediting4}></video>
               </div>
               <div id="work5" className="img_container">
                  <video
                     controls
                     muted
                     loop
                     id="videoediting_video"
                     src={videoediting5}></video>
               </div>
               <div id="work6" className="img_container">
                  <video
                     controls
                     muted
                     loop
                     id="videoediting_video"
                     src={videoediting6}></video>
               </div>
               <div id="work7" className="img_container">
                  <video
                     controls
                     muted
                     loop
                     id="videoediting_video"
                     src={videoediting7}></video>
               </div>
               <div id="work8" className="img_container">
                  <video
                     controls
                     muted
                     loop
                     id="videoediting_video"
                     src={videoediting8}></video>
               </div>
               <div id="work9" className="img_container">
                  <video
                     controls
                     muted
                     loop
                     id="videoediting_video"
                     src={videoediting9}></video>
               </div>
               <div id="work10" className="img_container">
                  <video
                     controls
                     muted
                     loop
                     id="videoediting_video"
                     src={videoediting10}></video>
               </div>
               <div id="work11" className="img_container">
                  <video
                     controls
                     muted
                     loop
                     id="videoediting_video"
                     src={videoediting11}></video>
               </div>

               <div id="work12" className="img_container">
                  <video
                     controls
                     muted
                     loop
                     id="videoediting_video"
                     src={videoediting13}></video>
               </div>
               <div id="work13" className="img_container">
                  <video
                     controls
                     muted
                     loop
                     id="videoediting_video"
                     src={videoediting14}></video>
               </div>
               <div id="work14" className="img_container">
                  <video
                     controls
                     muted
                     loop
                     id="videoediting_video"
                     src={videoediting15}></video>
               </div>
               <div id="work15" className="img_container">
                  <video
                     controls
                     muted
                     loop
                     id="videoediting_video"
                     src={videoediting16}></video>
               </div>
               <div id="work16" className="img_container">
                  <video
                     controls
                     muted
                     loop
                     id="videoediting_video"
                     src={videoediting17}></video>
               </div>
               <div className="comments">
                  <img src={image1} alt="" />
                  <img src={image2} alt="" />
                  <img src={image3} alt="" />
                  <img src={image4} alt="" />
                  <img src={image5} alt="" />
                  <img src={image6} alt="" />
                  <img src={image7} alt="" />
                  <img src={image8} alt="" />
               </div>
            </div>
         </div>
      </section>
   );
};

export default Videoediting;
