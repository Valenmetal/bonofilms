import { Link } from "react-router-dom";
import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import preview_Filmmaking from "../assets/vid/preview/Scrolling preview FILMMAKING .mp4";
import preview_Videoediting from "../assets/vid/preview/Scrolling preview VIDEOEDITING.mp4";
import preview_Animation from "../assets/vid/preview/Scrolling preview ANIMACION.mp4";
import preview_Colorgrading from "../assets/vid/preview/Scrolling preview COLOR.mp4";
import { useRef } from "react";

export default function Clientes() {
   const pojects_grid = useRef();
   useGSAP(
      () => {
         let mm = gsap.matchMedia();
         mm.add(
            {
               small: "(max-width: 522px)",
               large: "(min-width: 523px)",
            },
            (ctx) => {
               const { small } = ctx.conditions;

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
                     end: "bottom top",
                     scrub: 1.5,
                  },
                  rotate: 40,
                  y: small ? "20em" : "30em",
                  x: small ? "-70em" : "-200em",
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
                     end: "bottom top",
                     scrub: 1.5,
                  },
                  rotate: 70,
                  y: small ? "20em" : "30em",
                  x: small ? "-70em" : "-200em",
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
                     end: "bottom top",
                     scrub: 1.5,
                  },
                  rotate: 70,
                  y: small ? "20em" : "30em",
                  x: small ? "-70em" : "-200em",
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
                     end: "bottom top",
                     scrub: 1.5,
                  },
                  rotate: 70,
                  y: small ? "20em" : "30em",
                  x: small ? "-70em" : "-200em",
               });
            }
         );
      },
      { scope: pojects_grid }
   );

   return (
      <>
         <div className="section" style={{ marginTop: 0, height: "400vh" }}>
            <div ref={pojects_grid} className="pojects_grid">
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
      </>
   );
}
