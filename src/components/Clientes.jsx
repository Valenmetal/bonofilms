import { Link } from "react-router-dom"
import React from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"

import preview_Filmmaking from "../assets/vid/preview/Scrolling preview FILMMAKING .mp4"
import preview_Videoediting from "../assets/vid/preview/Scrolling preview VIDEOEDITING.mp4"
import preview_Animation from "../assets/vid/preview/Scrolling preview ANIMACION.mp4"
import preview_Colorgrading from "../assets/vid/preview/Scrolling preview COLOR.mp4"
import { useRef } from "react"

export default function Clientes() {
   const projects_grid = useRef()
   useGSAP(
      () => {
         let mm = gsap.matchMedia()
         mm.add(
            {
               small: "(max-width: 522px)",
               large: "(min-width: 523px)",
            },
            (ctx) => {
               const { small } = ctx.conditions

               gsap.from("#filmmaking", {
                  scrollTrigger: {
                     trigger: "#filmmaking",
                     start: "top bottom",
                     end: "top center",
                     scrub: 1,
                  },
                  scale: 3,
                  y: 200,
               })
               gsap.from("#filmmaking_stroke", {
                  scrollTrigger: {
                     trigger: "#filmmaking_stroke",
                     start: "top bottom",
                     end: "top center",
                     scrub: 1,
                  },
                  scale: 3,
                  y: 200,
               })
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
               })
               gsap.from("#videoediting", {
                  scrollTrigger: {
                     trigger: "#videoediting",
                     start: "top bottom",
                     end: "top center",
                     scrub: 1,
                  },
                  scale: 3,
                  y: 200,
               })
               gsap.from("#videoediting_stroke", {
                  scrollTrigger: {
                     trigger: "#videoediting_stroke",
                     start: "top bottom",
                     end: "top center",
                     scrub: 1,
                  },
                  scale: 3,
                  y: 200,
               })
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
               })

               gsap.from("#animation", {
                  scrollTrigger: {
                     trigger: "#animation",
                     start: "top bottom",
                     end: "top center",
                     scrub: 1,
                  },
                  scale: 3,
                  y: 200,
               })
               gsap.from("#animation_stroke", {
                  scrollTrigger: {
                     trigger: "#animation_stroke",
                     start: "top bottom",
                     end: "top center",
                     scrub: 1,
                  },
                  scale: 3,
                  y: 200,
               })
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
               })

               gsap.from("#colorgrading", {
                  scrollTrigger: {
                     trigger: "#colorgrading",
                     start: "top bottom",
                     end: "top center",
                     scrub: 1,
                  },
                  scale: 3,
                  y: 200,
               })
               gsap.from("#colorgrading_stroke", {
                  scrollTrigger: {
                     trigger: "#colorgrading_stroke",
                     start: "top bottom",
                     end: "top center",
                     scrub: 1,
                  },
                  scale: 3,
                  y: 200,
               })
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
               })
            }
         )
      },
      { scope: projects_grid }
   )

   return (
      <>
         <div className="section" style={{ marginTop: 0 }}>
            <div ref={projects_grid} className="projects_grid">
               <div className="vert_wraper">
                  <Link className="link" to="/filmmaking">
                     <div id="filmmaking" className="projects_item">
                        Filmmaking
                     </div>
                     <div
                        id="filmmaking_stroke"
                        className="projects_item projects_stroke">
                        Filmmaking
                     </div>

                     <video
                        autoPlay
                        muted
                        loop
                        id="filmmaking_video"
                        className="flying_video"
                        src={preview_Filmmaking}></video>
                  </Link>
               </div>
               <div className="vert_wraper">
                  <Link className="link" to="/videoediting">
                     <div id="videoediting" className="projects_item">
                        Videoediting
                     </div>

                     <div
                        id="videoediting_stroke"
                        className="projects_item projects_stroke">
                        Videoediting
                     </div>

                     <video
                        autoPlay
                        muted
                        loop
                        id="videoediting_video"
                        className="flying_video"
                        src={preview_Videoediting}></video>
                  </Link>
               </div>
               <div className="vert_wraper">
                  <Link className="link" to="/animation">
                     <div id="animation" className="projects_item">
                        Animation
                     </div>

                     <div
                        id="animation_stroke"
                        className="projects_item projects_stroke">
                        Animation
                     </div>

                     <video
                        autoPlay
                        muted
                        loop
                        id="animation_video"
                        className="flying_video"
                        src={preview_Animation}></video>
                  </Link>
               </div>
               <div className="vert_wraper">
                  <Link className="link" to="/colorgrading">
                     <div id="colorgrading" className="projects_item">
                        Colorgrading
                     </div>

                     <div
                        id="colorgrading_stroke"
                        className="projects_item projects_stroke">
                        Colorgrading
                     </div>

                     <video
                        autoPlay
                        muted
                        loop
                        id="colorgrading_video"
                        className="flying_video"
                        src={preview_Colorgrading}></video>
                  </Link>
               </div>
            </div>
         </div>
      </>
   )
}
