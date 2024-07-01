import video from "../assets/vid/banners/Banner Home COLORGRADING.mp4";
import colorgrading from "../assets/vid/filmmaking/ClaseMADA.mp4";
import colorgrading2 from "../assets/vid/filmmaking/Rio.mp4";
import colorgrading3 from "../assets/vid/filmmaking/EmiliaCafe.mp4";
import colorgrading4 from "../assets/vid/filmmaking/Handball.mp4";
import colorgrading5 from "../assets/vid/filmmaking/Pancho.mp4";
import colorgrading6 from "../assets/vid/filmmaking/Pasta.mp4";

import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import mini_Filmmaking from "../assets/vid/mini/Miniatura_FILMMAKING.mp4";
import mini_Videoediting from "../assets/vid/mini/Miniatura_VIDEOEDITING.mp4";
import mini_Animation from "../assets/vid/mini/Miniatura_ANIMACION.mp4";

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

         gsap.from("#filmmaking_menu", {
            scrollTrigger: {
               trigger: "#filmmaking_menu",
               start: "top bottom",
               end: "top 90%",
               scrub: 1,
            },
            opacity: 0,
            y: 100,
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

         {
            let film = document.querySelector("#filmmaking_menu");
            let tl_filmmaking = gsap.timeline({ paused: true });

            tl_filmmaking.to("#filmmaking_mini", {
               duration: 0.5,
               display: "block",
               width: "100%",
            });

            film.addEventListener("mouseenter", () =>
               tl_filmmaking.timeScale(1).play()
            );
            film.addEventListener("mouseleave", () =>
               tl_filmmaking.timeScale(1.5).reverse()
            );

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
         }
      },
      { scope: ".pojects_menu_grid" }
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

         <section className="pojects_menu_section">
            <div className="pojects_menu_grid">
               <div id="filmmaking_menu" className="pojects_menu_item">
                  <Link className="link" to="/filmmaking">
                     <span className="pojects_menu_item_fill">Filmmaking</span>
                     <span id="ghost">Film</span>
                     <video
                        autoPlay
                        muted
                        loop
                        id="filmmaking_mini"
                        className="poject_mini"
                        src={mini_Filmmaking}></video>
                     <span id="ghost">making</span>
                  </Link>
               </div>
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
            </div>
         </section>
      </section>
   );
};

export default Colorgrading;
