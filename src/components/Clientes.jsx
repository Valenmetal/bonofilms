import { Link } from "react-router-dom";
import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import preview_Filmmaking from "../assets/vid/preview/Scrolling preview FILMMAKING .mp4";
import preview_Videoediting from "../assets/vid/preview/Scrolling preview VIDEOEDITING.mp4";
import preview_Animation from "../assets/vid/preview/Scrolling preview ANIMACION.mp4";
import preview_Colorgrading from "../assets/vid/preview/Scrolling preview COLOR.mp4";

import mini_Filmmaking from "../assets/vid/mini/Miniatura_FILMMAKING.mp4";
import mini_Videoediting from "../assets/vid/mini/Miniatura_VIDEOEDITING.mp4";
import mini_Animation from "../assets/vid/mini/Miniatura_ANIMACION.mp4";
import mini_Colorgrading from "../assets/vid/mini/Miniatura_COLORGRADING.mp4";
export default function Clientes() {
   useGSAP(
      () => {
         gsap.from("#filmmaking", {
            scrollTrigger: {
               trigger: "#filmmaking",
               start: "top bottom",
               end: "top center",
               scrub: 1,
            },
            scale: 3,
            y: 200,
         });
         gsap.from("#filmmaking_stroke", {
            scrollTrigger: {
               trigger: "#filmmaking_stroke",
               start: "top bottom",
               end: "top center",
               scrub: 1,
            },
            scale: 3,
            y: 200,
         });
         gsap.from("#filmmaking_video", {
            scrollTrigger: {
               trigger: "#filmmaking",
               start: "top bottom",
               end: "top top",
               scrub: 1.5,
            },
            rotate: 70,
            y: 500,
            x: -5000,
         });

         gsap.from("#videoediting", {
            scrollTrigger: {
               trigger: "#videoediting",
               start: "top bottom",
               end: "top center",
               scrub: 1,
            },
            scale: 3,
            y: 200,
         });
         gsap.from("#videoediting_stroke", {
            scrollTrigger: {
               trigger: "#videoediting_stroke",
               start: "top bottom",
               end: "top center",
               scrub: 1,
            },
            scale: 3,
            y: 200,
         });
         gsap.from("#videoediting_video", {
            scrollTrigger: {
               trigger: "#videoediting",
               start: "top bottom",
               end: "top top",
               scrub: 1.5,
            },
            rotate: 70,
            y: 500,
            x: -5000,
         });

         gsap.from("#animation", {
            scrollTrigger: {
               trigger: "#animation",
               start: "top bottom",
               end: "top center",
               scrub: 1,
            },
            scale: 3,
            y: 200,
         });
         gsap.from("#animation_stroke", {
            scrollTrigger: {
               trigger: "#animation_stroke",
               start: "top bottom",
               end: "top center",
               scrub: 1,
            },
            scale: 3,
            y: 200,
         });
         gsap.from("#animation_video", {
            scrollTrigger: {
               trigger: "#animation",
               start: "top bottom",
               end: "top top",
               scrub: 1.5,
            },
            rotate: 70,
            y: 500,
            x: -5000,
         });

         gsap.from("#colorgrading", {
            scrollTrigger: {
               trigger: "#colorgrading",
               start: "top bottom",
               end: "top center",
               scrub: 1,
            },
            scale: 3,
            y: 200,
         });
         gsap.from("#colorgrading_stroke", {
            scrollTrigger: {
               trigger: "#colorgrading_stroke",
               start: "top bottom",
               end: "top center",
               scrub: 1,
            },
            scale: 3,
            y: 200,
         });
         gsap.from("#colorgrading_video", {
            scrollTrigger: {
               trigger: "#colorgrading",
               start: "top bottom",
               end: "top top",
               scrub: 1.5,
            },
            rotate: 70,
            y: 500,
            x: -5000,
         });
      },
      { scope: ".pojects_grid" }
   );

   useGSAP(
      () => {
         gsap.to(".pojects_menu_item_fill", {
            scrollTrigger: {
               trigger: "#videoediting_menu",
               start: "-20% center",
               duration: 0.1,
            },
            width: "100%",
         });
         gsap.to(".pojects_menu_item_fill", {
            scrollTrigger: {
               trigger: "#videoediting_menu",
               start: "-20% center",
            },
            autoAlpha: 0,
            delay: 0.4,
         });
         gsap.to("#ghost", {
            scrollTrigger: {
               trigger: "#videoediting_menu",
               start: "-20% center",
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
      <>
         <div className="section">
            <div className="pojects_grid">
               <div className="vert_wraper">
                  <Link className="link" to="/filmmaking">
                     <div id="filmmaking" className="pojects_item">
                        Filmmaking
                     </div>
                     <div
                        id="filmmaking_stroke"
                        className="pojects_item pojects_stroke">
                        Filmmaking
                     </div>
                  </Link>
                  <video
                     autoPlay
                     muted
                     loop
                     id="filmmaking_video"
                     className="flying_video"
                     src={preview_Filmmaking}></video>
               </div>
               <div className="vert_wraper">
                  <Link className="link" to="/videoediting">
                     <div id="videoediting" className="pojects_item">
                        Videoediting
                     </div>

                     <div
                        id="videoediting_stroke"
                        className="pojects_item pojects_stroke">
                        Videoediting
                     </div>
                  </Link>
                  <video
                     autoPlay
                     muted
                     loop
                     id="videoediting_video"
                     className="flying_video"
                     src={preview_Videoediting}></video>
               </div>
               <div className="vert_wraper">
                  <Link className="link" to="/animation">
                     <div id="animation" className="pojects_item">
                        Animation
                     </div>

                     <div
                        id="animation_stroke"
                        className="pojects_item pojects_stroke">
                        Animation
                     </div>
                  </Link>
                  <video
                     autoPlay
                     muted
                     loop
                     id="animation_video"
                     className="flying_video"
                     src={preview_Animation}></video>
               </div>
               <div className="vert_wraper">
                  <Link className="link" to="/colorgrading">
                     <div id="colorgrading" className="pojects_item">
                        Colorgrading
                     </div>

                     <div
                        id="colorgrading_stroke"
                        className="pojects_item pojects_stroke">
                        Colorgrading
                     </div>
                  </Link>
                  <video
                     autoPlay
                     muted
                     loop
                     id="colorgrading_video"
                     className="flying_video"
                     src={preview_Colorgrading}></video>
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
      </>
   );
}
