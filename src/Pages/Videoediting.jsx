import video from "../assets/vid/banners/Banner Home VIDEOEDITING.mp4";
import videoediting12 from "../assets/vid/videoediting/Reel Freelance 2024.mov";
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
import videoediting11 from "../assets/vid/videoediting/Pancho Publicidad.mov";
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

const Videoediting = () => {
   useGSAP(
      () => {
         gsap.from(".work_title", {
            opacity: 0,
            y: 100,
         });
         gsap.from(".subtitle,.subtitle_stroke", {
            delay: 0.1,
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
               id="Videoediting_title"
               autoPlay
               muted
               loop
               src={video}
               className="banner_videoediting"></video>

            <h1 className="work_title">Videoediting</h1>
            <h1 className="work_title work_title_stroke">Videoediting</h1>

            <p className="subtitle">REEL 2024</p>
            <p className="subtitle_stroke">REEL 2024</p>

            <div id="reel" className="reel">
               <video
                  autoPlay
                  controls
                  muted
                  loop
                  id="videoediting_video"
                  src={videoediting12}></video>
            </div>

            <div className="videoediting_work_grid">
               <div id="work1" className="img_container">
                  <video
                     autoPlay
                     controls
                     muted
                     loop
                     id="videoediting_video"
                     src={videoediting}></video>

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
                     id="videoediting_video"
                     src={videoediting2}></video>

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
                     id="videoediting_video"
                     src={videoediting3}></video>
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
                     id="videoediting_video"
                     src={videoediting4}></video>

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
                     id="videoediting_video"
                     src={videoediting5}></video>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Officiis, dolorem.
                  </p>
               </div>
               <div id="work6" className="img_container">
                  <video
                     autoPlay
                     controls
                     muted
                     loop
                     id="videoediting_video"
                     src={videoediting6}></video>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Officiis, dolorem.
                  </p>
               </div>
               <div id="work7" className="img_container">
                  <video
                     autoPlay
                     controls
                     muted
                     loop
                     id="videoediting_video"
                     src={videoediting7}></video>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Officiis, dolorem.
                  </p>
               </div>
               <div id="work8" className="img_container">
                  <video
                     autoPlay
                     controls
                     muted
                     loop
                     id="videoediting_video"
                     src={videoediting8}></video>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Officiis, dolorem.
                  </p>
               </div>
               <div id="work9" className="img_container">
                  <video
                     autoPlay
                     controls
                     muted
                     loop
                     id="videoediting_video"
                     src={videoediting9}></video>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Officiis, dolorem.
                  </p>
               </div>
               <div id="work10" className="img_container">
                  <video
                     autoPlay
                     controls
                     muted
                     loop
                     id="videoediting_video"
                     src={videoediting10}></video>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Officiis, dolorem.
                  </p>
               </div>
               <div id="work11" className="img_container">
                  <video
                     autoPlay
                     controls
                     muted
                     loop
                     id="videoediting_video"
                     src={videoediting11}></video>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Officiis, dolorem.
                  </p>
               </div>

               <div id="work12" className="img_container">
                  <video
                     autoPlay
                     controls
                     muted
                     loop
                     id="videoediting_video"
                     src={videoediting13}></video>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Officiis, dolorem.
                  </p>
               </div>
               <div id="work13" className="img_container">
                  <video
                     autoPlay
                     controls
                     muted
                     loop
                     id="videoediting_video"
                     src={videoediting14}></video>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Officiis, dolorem.
                  </p>
               </div>
               <div id="work14" className="img_container">
                  <video
                     autoPlay
                     controls
                     muted
                     loop
                     id="videoediting_video"
                     src={videoediting15}></video>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Officiis, dolorem.
                  </p>
               </div>
               <div id="work15" className="img_container">
                  <video
                     autoPlay
                     controls
                     muted
                     loop
                     id="videoediting_video"
                     src={videoediting16}></video>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Officiis, dolorem.
                  </p>
               </div>
               <div id="work16" className="img_container">
                  <video
                     autoPlay
                     controls
                     muted
                     loop
                     id="videoediting_video"
                     src={videoediting17}></video>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Officiis, dolorem.
                  </p>
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
