import React from "react";
import video from "../assets/vid/banners/Banner Home ANIMACION.mp4";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Danza_vertical_2 from "/Danza_vertical_2.mp4";
import EmiliaCafe from "/EmiliaCafe.mp4";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import mini_Filmmaking from "../assets/vid/mini/Miniatura_FILMMAKING.mp4";
import mini_Videoediting from "../assets/vid/mini/Miniatura_VIDEOEDITING.mp4";
import mini_Colorgrading from "../assets/vid/mini/Miniatura_COLORGRADING.mp4";
const Animation = () => {
   const work_container = useRef();
   const pojects_menu_grid = useRef();
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
      },
      { scope: work_container }
   );
   useGSAP(
      () => {
         gsap.to(".pojects_menu_item_fill", {
            scrollTrigger: {
               trigger: "#filmmaking_menu",
               start: "-75% center",
               duration: 0.1,
            },
            width: "100%",
         });
         gsap.to(".pojects_menu_item_fill", {
            scrollTrigger: {
               trigger: "#filmmaking_menu",
               start: "-75% center",
            },
            autoAlpha: 0,
            delay: 0.4,
         });
         gsap.to("#ghost", {
            scrollTrigger: {
               trigger: "#filmmaking_menu",
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
      { scope: pojects_menu_grid }
   );
   return (
      <section className="page_section">
         <div ref={work_container} className="work_container">
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
                     <Link
                        className="external-logo"
                        to={`/animation/Danza_vertical_2`}>
                        <ExternalLogo />
                     </Link>
                     <video
                        muted
                        loop
                        id="filmmaking_video"
                        src={Danza_vertical_2}></video>
                  </div>
                  <div id="work2" className="img_container">
                     <Link className="external-logo" to={`/animation/EmiliaCafe`}>
                        <ExternalLogo />
                     </Link>
                     <video
                        muted
                        loop
                        id="filmmaking_video"
                        src={EmiliaCafe}></video>
                  </div>
               </div>
            </div>
         </div>

         <section className="pojects_menu_section">
            <div ref={pojects_menu_grid} className="pojects_menu_grid">
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
};

export default Animation;
