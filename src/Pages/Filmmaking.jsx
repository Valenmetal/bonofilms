import video from "../assets/vid/banners/Banner Home FILMMAKING.mp4";
import AGUS from "../assets/vid/filmmaking/AGUS.mp4";
import ClaseMADA from "../assets/vid/filmmaking/Clase MADA.mp4";
import Danza_vertical from "../assets/vid/filmmaking/Danza vertical 1.mp4";
import Danza_vertical_2 from "../assets/vid/filmmaking/Danza vertical 2.mp4";
import Danza_vertical_3 from "../assets/vid/filmmaking/Danza vertical 3_00087406.mp4";
import EmiliaCafe from "../assets/vid/filmmaking/Emilia Cafe.mp4";
import FPM from "../assets/vid/filmmaking/FPM 22.mp4";
import Handball from "../assets/vid/filmmaking/Handball.mp4";
import PASTA from "../assets/vid/filmmaking/MAD PASTA.mp4";
import Rio from "../assets/vid/filmmaking/MADA Rio.mp4";
import Pancho from "../assets/vid/filmmaking/Pancho Publicidad.mp4";
import SEBA from "../assets/vid/filmmaking/SEBA.mp4";
import reel from "../assets/vid/filmmaking/Bonofilms reel 2024.mp4";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import mini_Videoediting from "../assets/vid/mini/Miniatura_VIDEOEDITING.mp4";
import mini_Animation from "../assets/vid/mini/Miniatura_ANIMACION.mp4";
import mini_Colorgrading from "../assets/vid/mini/Miniatura_COLORGRADING.mp4";

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

   useGSAP(
      () => {
         gsap.to(".pojects_menu_item_fill", {
            scrollTrigger: {
               trigger: "#videoediting_menu",
               start: "-75% center",
               duration: 0.1,
            },
            width: "100%",
         });
         gsap.to(".pojects_menu_item_fill", {
            scrollTrigger: {
               trigger: "#videoediting_menu",
               start: "-75% center",
            },
            autoAlpha: 0,
            delay: 0.4,
         });
         gsap.to("#ghost", {
            scrollTrigger: {
               trigger: "#videoediting_menu",
               start: "-75% center",
            },
            color: "rgba(175, 182, 223)",
            borderBottomWidth: "2px",
            delay: 1,
         });

         gsap.from("#videoediting_menu", {
            scrollTrigger: {
               trigger: "#videoediting_menu",
               start: "top bottom",
               end: "top 90%",
               scrub: 1,
            },
            opacity: 0,
            y: 100,
         });
         gsap.from("#animation_menu", {
            scrollTrigger: {
               trigger: "#animation_menu",
               start: "top bottom",
               end: "top 90%",
               scrub: 1,
            },
            opacity: 0,
            y: 100,
         });
         gsap.from("#colorgrading_menu", {
            scrollTrigger: {
               trigger: "#colorgrading_menu",
               start: "top bottom",
               end: "top 90%",
               scrub: 1,
            },
            opacity: 0,
            y: 100,
         });

         {
            let videoediting = document.querySelector("#videoediting_menu");
            let tl_videoediting = gsap.timeline({ paused: true });

            tl_videoediting.to("#videoediting_mini", {
               duration: 0.5,
               display: "block",
               width: "100%",
            });
            videoediting.addEventListener("mouseenter", () =>
               tl_videoediting.timeScale(1).play()
            );
            videoediting.addEventListener("mouseleave", () =>
               tl_videoediting.timeScale(1.5).reverse()
            );

            let animation = document.querySelector("#animation_menu");
            let tl_animation = gsap.timeline({ paused: true });

            tl_animation.to("#animation_mini", {
               duration: 0.5,
               display: "block",
               width: "100%",
            });
            animation.addEventListener("mouseenter", () =>
               tl_animation.timeScale(1).play()
            );
            animation.addEventListener("mouseleave", () =>
               tl_animation.timeScale(1.5).reverse()
            );

            let colorgrading = document.querySelector("#colorgrading_menu");
            let tl_colorgrading = gsap.timeline({ paused: true });

            tl_colorgrading.to("#colorgrading_mini", {
               duration: 0.5,
               display: "block",
               width: "100%",
            });
            colorgrading.addEventListener("mouseenter", () =>
               tl_colorgrading.timeScale(1).play()
            );
            colorgrading.addEventListener("mouseleave", () =>
               tl_colorgrading.timeScale(1.5).reverse()
            );
         }
      },
      { scope: ".pojects_menu_grid" }
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

            <div style={{ marginTop: "1em" }} className="work_grid">
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

         <section className="pojects_menu_section">
            <div className="pojects_menu_grid">
               <div id="videoediting_menu" className="pojects_menu_item">
                  <Link className="link" to="/videoediting">
                     <span className="pojects_menu_item_fill">Videoediting</span>

                     <span id="ghost">Video</span>
                     <video
                        autoPlay
                        muted
                        loop
                        id="videoediting_mini"
                        className="poject_mini"
                        src={mini_Videoediting}></video>
                     <span id="ghost">editing</span>
                  </Link>
               </div>
               <div id="animation_menu" className="pojects_menu_item">
                  <Link className="link" to="/animation">
                     <span className="pojects_menu_item_fill">Animation</span>
                     <span id="ghost">Animation</span>
                     <video
                        autoPlay
                        muted
                        loop
                        id="animation_mini"
                        className="poject_mini"
                        src={mini_Animation}></video>
                  </Link>
               </div>
               <div id="colorgrading_menu" className="pojects_menu_item">
                  <Link className="link" to="/colorgrading">
                     <span className="pojects_menu_item_fill">Colorgrading</span>
                     <span id="ghost">Colorgrading</span>
                     <video
                        autoPlay
                        muted
                        loop
                        id="colorgrading_mini"
                        className="poject_mini"
                        src={mini_Colorgrading}></video>
                  </Link>
               </div>
            </div>
         </section>
      </section>
   );
}
