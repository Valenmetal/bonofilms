import video from "../assets/vid/banners/Banner Home FILMMAKING 2.mp4";
import filmmaking from "../assets/vid/filmmaking/Contemo 1 horizontal.mp4";
import filmmaking2 from "../assets/vid/filmmaking/Urbano solo horizontal.mp4";
import filmmaking3 from "../assets/vid/filmmaking/Emilia Cafe.mov";

import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";

export default function Filmmaking() {
   /* useEffect(() => {
      document
         .getElementById("videoContainer")
         .addEventListener("mousemove", function (event) {
            const playButton = document.getElementById("playButton");
            // Obtiene la posición del cursor relativa al contenedor
            const x = event.offsetX;
            const y = event.offsetY;

            // Actualiza la posición del botón de play
            playButton.style.left = `${x}px`;
            playButton.style.top = `${y}px`;
         });

      document
         .getElementById("videoContainer2")
         .addEventListener("mousemove", function (event) {
            const playButton = document.getElementById("playButton2");
            // Obtiene la posición del cursor relativa al contenedor
            const x = event.offsetX;
            const y = event.offsetY;

            // Actualiza la posición del botón de play
            playButton.style.left = `${x}px`;
            playButton.style.top = `${y}px`;
         });
   }, []); */

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
               autoPlay
               muted
               loop
               src={video}
               className="banner_filmmaking"></video>

            <h1 className="work_title">Filmmaking</h1>
            <h1 className="work_title work_title_stroke">Filmmaking</h1>

            <div className="work_grid">
               <div id="work1" className="img_container">
                  <div className="video-container" id="videoContainer">
                     <video
                        controls
                        muted
                        loop
                        id="filmmaking_video"
                        src={filmmaking}></video>
                  </div>
                  {/* <div className="play-button" id="playButton">
                     Boton
                  </div> */}
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Officiis, dolorem.
                  </p>
               </div>
               <div id="work2" className="img_container">
                  <div className="video-container" id="videoContainer2">
                     <video
                        controls
                        muted
                        loop
                        id="filmmaking_video"
                        src={filmmaking2}></video>
                  </div>
                  {/* <div className="play-button" id="playButton2">
                     Boton
                  </div> */}
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Officiis, dolorem.
                  </p>
               </div>

               <div id="work3" className="img_container">
                  <div className="video-container" id="videoContainer">
                     <video
                        controls
                        muted
                        loop
                        id="filmmaking_video"
                        src={filmmaking3}></video>

                     {/* <div className="play-button" id="playButton">
                        Boton
                     </div> */}
                  </div>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Officiis, dolorem.
                  </p>
               </div>
               <div id="work4" className="img_container">
                  <div className="video-container" id="videoContainer">
                     <video
                        controls
                        muted
                        loop
                        id="filmmaking_video"
                        src={filmmaking}></video>

                     {/* <div className="play-button" id="playButton">
                        Boton
                     </div> */}
                  </div>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Officiis, dolorem.
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
}
