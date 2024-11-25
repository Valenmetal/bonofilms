import video from "../assets/vid/banners/Banner Home FILMMAKING.mp4"
import AGUS from "/AGUS.mp4"
import ClaseMADA from "/ClaseMADA.mp4"
import Danza_vertical_1 from "/Danza_vertical_1.mp4"
import Danza_vertical_2 from "/Danza_vertical_2.mp4"
import Danza_vertical_3 from "/Danza_vertical_3.mp4"
import EmiliaCafe from "/EmiliaCafe.mp4"
import FPM from "/FPM.mp4"
import Handball from "/Handball.mp4"
import Pasta from "/Pasta.mp4"
import Rio from "/Rio.mp4"
import Pancho from "/Pancho.mp4"
import SEBA from "/SEBA.mp4"
import Reel from "/Reel2024.mp4"

import { useRef, useState } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { Link } from "react-router-dom"
import mini_Videoediting from "../assets/vid/mini/Miniatura_VIDEOEDITING.mp4"
import mini_Animation from "../assets/vid/mini/Miniatura_ANIMACION.mp4"
import mini_Colorgrading from "../assets/vid/mini/Miniatura_COLORGRADING.mp4"
import { Modal } from "../components/Modal"

export default function Filmmaking() {
   const work_container = useRef()
   const projects_menu_grid = useRef()

   const [isModalOpen, setIsModalOpen] = useState(false)
   const [selectedVideo, setSelectedVideo] = useState("")

   const handleClick = (videoSrc) => {
      setSelectedVideo(videoSrc) // Guarda el video que se va a mostrar en el modal
      setIsModalOpen(true) // Abre el modal
   }

   useGSAP(
      () => {
         gsap.from(".work_title", {
            opacity: 0,
            y: 100,
         })
         gsap.from(".subtitle", {
            delay: 0.1,
            opacity: 0,
            y: 100,
         })

         gsap.from("#work1, #work2", {
            delay: 0.2,
            opacity: 0,
            y: 100,
         })
      },
      { scope: work_container }
   )

   useGSAP(
      () => {
         gsap.to(".projects_menu_item_fill", {
            scrollTrigger: {
               trigger: "#videoediting_menu",
               start: "-75% center",
               duration: 0.1,
            },
            width: "100%",
         })
         gsap.to(".projects_menu_item_fill", {
            scrollTrigger: {
               trigger: "#videoediting_menu",
               start: "-75% center",
            },
            autoAlpha: 0,
            delay: 0.4,
         })
         gsap.to("#ghost", {
            scrollTrigger: {
               trigger: "#videoediting_menu",
               start: "-75% center",
            },
            color: "rgba(175, 182, 223)",
            borderBottomWidth: "2px",
            delay: 1,
         })

         gsap.from("#videoediting_menu", {
            scrollTrigger: {
               trigger: "#videoediting_menu",
               start: "top bottom",
               end: "top 90%",
               scrub: 1,
            },
            opacity: 0,
            y: 100,
         })
         gsap.from("#animation_menu", {
            scrollTrigger: {
               trigger: "#animation_menu",
               start: "top bottom",
               end: "top 90%",
               scrub: 1,
            },
            opacity: 0,
            y: 100,
         })
         gsap.from("#colorgrading_menu", {
            scrollTrigger: {
               trigger: "#colorgrading_menu",
               start: "top bottom",
               end: "top 90%",
               scrub: 1,
            },
            opacity: 0,
            y: 100,
         })

         {
            let videoediting = document.querySelector("#videoediting_menu")
            let tl_videoediting = gsap.timeline({ paused: true })

            tl_videoediting.to("#videoediting_mini", {
               duration: 0.5,
               display: "block",
               width: "100%",
            })
            videoediting.addEventListener("mouseenter", () =>
               tl_videoediting.timeScale(1).play()
            )
            videoediting.addEventListener("mouseleave", () =>
               tl_videoediting.timeScale(1.5).reverse()
            )

            let animation = document.querySelector("#animation_menu")
            let tl_animation = gsap.timeline({ paused: true })

            tl_animation.to("#animation_mini", {
               duration: 0.5,
               display: "block",
               width: "100%",
            })
            animation.addEventListener("mouseenter", () =>
               tl_animation.timeScale(1).play()
            )
            animation.addEventListener("mouseleave", () =>
               tl_animation.timeScale(1.5).reverse()
            )

            let colorgrading = document.querySelector("#colorgrading_menu")
            let tl_colorgrading = gsap.timeline({ paused: true })

            tl_colorgrading.to("#colorgrading_mini", {
               duration: 0.5,
               display: "block",
               width: "100%",
            })
            colorgrading.addEventListener("mouseenter", () =>
               tl_colorgrading.timeScale(1).play()
            )
            colorgrading.addEventListener("mouseleave", () =>
               tl_colorgrading.timeScale(1.5).reverse()
            )
         }
      },
      { scope: projects_menu_grid }
   )

   return (
      <section className="page_section">
         <div ref={work_container} className="work_container">
            <div className="banner_container">
               <video
                  autoPlay
                  muted
                  loop
                  src={video}
                  className="banner_filmmaking"></video>
            </div>
            <h1 className="work_title">Filmmaking</h1>
            <h1 className="work_title work_title_stroke">Filmmaking</h1>

            <div className="work_grid">
               <div className="wraper">
                  <div
                     id="work11"
                     className="img_container"
                     onClick={() => handleClick(Handball)}>
                     <Link
                        className="external-logo"
                        to={`/filmmaking/Handball`}></Link>
                     <video
                        style={{ pointerEvents: "none" }}
                        poster="/miniatura-video-handball.webp"
                        id="filmmaking_video"
                        muted
                        loop
                        src={Handball}></video>
                     <div className="custom-video__control">
                        <svg
                           className="triangle"
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 24 24">
                           <path
                              fill="currentColor"
                              d="M8 17.175V6.825q0-.425.3-.713t.7-.287q.125 0 .263.037t.262.113l8.15 5.175q.225.15.338.375t.112.475t-.112.475t-.338.375l-8.15 5.175q-.125.075-.262.113T9 18.175q-.4 0-.7-.288t-.3-.712"
                           />
                        </svg>
                     </div>
                  </div>
                  <div
                     id="work12"
                     className="img_container"
                     onClick={() => handleClick(Rio)}>
                     <Link className="external-logo" to={`/filmmaking/Rio`}></Link>
                     <video
                        style={{ pointerEvents: "none" }}
                        poster="/MADA Rio.webp"
                        id="filmmaking_video"
                        muted
                        loop
                        src={Rio}></video>
                     <div className="custom-video__control">
                        <svg
                           className="triangle"
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 24 24">
                           <path
                              fill="currentColor"
                              d="M8 17.175V6.825q0-.425.3-.713t.7-.287q.125 0 .263.037t.262.113l8.15 5.175q.225.15.338.375t.112.475t-.112.475t-.338.375l-8.15 5.175q-.125.075-.262.113T9 18.175q-.4 0-.7-.288t-.3-.712"
                           />
                        </svg>
                     </div>
                  </div>
               </div>
            </div>

            <div id="reel" className="reel">
               <p className="subtitle">Reel 2024</p>
               <p className="subtitle_stroke">Reel 2024</p>
               <video
                  className="reel_video"
                  autoPlay
                  muted
                  loop
                  id="videoediting_video"
                  src={Reel}></video>
            </div>

            <div style={{ marginTop: "1em" }} className="work_grid">
               <div className="wraper">
                  <div
                     id="work1"
                     className="vertical_video"
                     onClick={() => handleClick(Danza_vertical_2)}>
                     <Link
                        className="external-logo"
                        to={`/filmmaking/Danza_vertical_2`}></Link>
                     <video
                        style={{ pointerEvents: "none" }}
                        id="filmmaking_video"
                        muted
                        loop
                        autoPlay
                        src={Danza_vertical_2}></video>
                  </div>
                  <div
                     id="work2"
                     className="img_container"
                     onClick={() => handleClick(EmiliaCafe)}>
                     <Link
                        className="external-logo"
                        to={`/filmmaking/EmiliaCafe`}></Link>
                     <video
                        style={{ pointerEvents: "none" }}
                        poster="/miniatura-video-cafe.webp"
                        id="filmmaking_video"
                        muted
                        loop
                        src={EmiliaCafe}></video>
                     <div className="custom-video__control">
                        <svg
                           className="triangle"
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 24 24">
                           <path
                              fill="currentColor"
                              d="M8 17.175V6.825q0-.425.3-.713t.7-.287q.125 0 .263.037t.262.113l8.15 5.175q.225.15.338.375t.112.475t-.112.475t-.338.375l-8.15 5.175q-.125.075-.262.113T9 18.175q-.4 0-.7-.288t-.3-.712"
                           />
                        </svg>
                     </div>
                  </div>
               </div>
               <div className="wraper">
                  <div
                     id="work3"
                     className="img_container"
                     onClick={() => handleClick(FPM)}>
                     <Link className="external-logo" to={`/filmmaking/FPM`}></Link>
                     <video
                        style={{ pointerEvents: "none" }}
                        poster="/Clase MADA.webp"
                        id="filmmaking_video"
                        muted
                        loop
                        src={FPM}></video>
                     <div className="custom-video__control">
                        <svg
                           className="triangle"
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 24 24">
                           <path
                              fill="currentColor"
                              d="M8 17.175V6.825q0-.425.3-.713t.7-.287q.125 0 .263.037t.262.113l8.15 5.175q.225.15.338.375t.112.475t-.112.475t-.338.375l-8.15 5.175q-.125.075-.262.113T9 18.175q-.4 0-.7-.288t-.3-.712"
                           />
                        </svg>
                     </div>
                  </div>
                  <div
                     id="work4"
                     className="vertical_video"
                     onClick={() => handleClick(Danza_vertical_3)}>
                     <Link
                        className="external-logo"
                        to={`/filmmaking/Danza_vertical_3`}></Link>
                     <video
                        style={{ pointerEvents: "none" }}
                        id="filmmaking_video"
                        muted
                        loop
                        autoPlay
                        src={Danza_vertical_3}></video>
                  </div>
               </div>
               <div className="wraper">
                  <div
                     id="work5"
                     className="img_container"
                     onClick={() => handleClick(Pasta)}>
                     <Link className="external-logo" to={`/filmmaking/Pasta`}></Link>
                     <video
                        style={{ pointerEvents: "none" }}
                        id="filmmaking_video"
                        poster="/miniatura-video-comida.webp"
                        muted
                        loop
                        src={Pasta}></video>
                     <div className="custom-video__control">
                        <svg
                           className="triangle"
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 24 24">
                           <path
                              fill="currentColor"
                              d="M8 17.175V6.825q0-.425.3-.713t.7-.287q.125 0 .263.037t.262.113l8.15 5.175q.225.15.338.375t.112.475t-.112.475t-.338.375l-8.15 5.175q-.125.075-.262.113T9 18.175q-.4 0-.7-.288t-.3-.712"
                           />
                        </svg>
                     </div>
                  </div>
                  <div
                     id="work6"
                     className="img_container"
                     onClick={() => handleClick(Pancho)}>
                     <Link
                        className="external-logo"
                        to={`/filmmaking/Pancho`}></Link>
                     <video
                        style={{ pointerEvents: "none" }}
                        id="filmmaking_video"
                        poster="/miniatura-video-pancho.webp"
                        muted
                        loop
                        src={Pancho}></video>
                     <div className="custom-video__control">
                        <svg
                           className="triangle"
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 24 24">
                           <path
                              fill="currentColor"
                              d="M8 17.175V6.825q0-.425.3-.713t.7-.287q.125 0 .263.037t.262.113l8.15 5.175q.225.15.338.375t.112.475t-.112.475t-.338.375l-8.15 5.175q-.125.075-.262.113T9 18.175q-.4 0-.7-.288t-.3-.712"
                           />
                        </svg>
                     </div>
                  </div>
               </div>
               <div className="wraper">
                  <div
                     id="work7"
                     className="img_container"
                     onClick={() => handleClick(ClaseMADA)}>
                     <Link
                        className="external-logo"
                        to={`/filmmaking/ClaseMADA`}></Link>
                     <video
                        style={{ pointerEvents: "none" }}
                        id="filmmaking_video"
                        muted
                        loop
                        src={ClaseMADA}></video>
                     <div className="custom-video__control">
                        <svg
                           className="triangle"
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 24 24">
                           <path
                              fill="currentColor"
                              d="M8 17.175V6.825q0-.425.3-.713t.7-.287q.125 0 .263.037t.262.113l8.15 5.175q.225.15.338.375t.112.475t-.112.475t-.338.375l-8.15 5.175q-.125.075-.262.113T9 18.175q-.4 0-.7-.288t-.3-.712"
                           />
                        </svg>
                     </div>
                  </div>
                  <div
                     id="work8"
                     className="vertical_video"
                     onClick={() => handleClick(Danza_vertical_1)}>
                     <Link
                        className="external-logo"
                        to={`/filmmaking/Danza_vertical_1`}></Link>
                     <video
                        style={{ pointerEvents: "none" }}
                        id="filmmaking_video"
                        muted
                        loop
                        autoPlay
                        src={Danza_vertical_1}></video>
                  </div>
               </div>

               <div className="wraper">
                  <div
                     id="work9"
                     className="img_container"
                     onClick={() => handleClick(SEBA)}>
                     <Link className="external-logo" to={`/filmmaking/SEBA`}></Link>
                     <video id="filmmaking_video" muted loop src={SEBA}></video>
                     <div className="custom-video__control">
                        <svg
                           className="triangle"
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 24 24">
                           <path
                              fill="currentColor"
                              d="M8 17.175V6.825q0-.425.3-.713t.7-.287q.125 0 .263.037t.262.113l8.15 5.175q.225.15.338.375t.112.475t-.112.475t-.338.375l-8.15 5.175q-.125.075-.262.113T9 18.175q-.4 0-.7-.288t-.3-.712"
                           />
                        </svg>
                     </div>
                  </div>
                  <div
                     id="work10"
                     className="img_container"
                     onClick={() => handleClick(AGUS)}>
                     <Link className="external-logo" to={`/filmmaking/AGUS`}></Link>
                     <video
                        id="filmmaking_video"
                        muted
                        loop
                        src={`${AGUS}#t=0.1`}></video>
                     <div className="custom-video__control">
                        <svg
                           className="triangle"
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 24 24">
                           <path
                              fill="currentColor"
                              d="M8 17.175V6.825q0-.425.3-.713t.7-.287q.125 0 .263.037t.262.113l8.15 5.175q.225.15.338.375t.112.475t-.112.475t-.338.375l-8.15 5.175q-.125.075-.262.113T9 18.175q-.4 0-.7-.288t-.3-.712"
                           />
                        </svg>
                     </div>
                  </div>
               </div>
            </div>

            {isModalOpen && (
               <Modal
                  selectedVideo={selectedVideo}
                  setIsModalOpen={setIsModalOpen}
                  setSelectedVideo={setSelectedVideo}
               />
            )}
         </div>
         <section className="projects_menu_section">
            <div ref={projects_menu_grid} className="projects_menu_grid">
               <div id="videoediting_menu" className="projects_menu_item">
                  <Link className="link" to="/videoediting">
                     <span className="projects_menu_item_fill">Videoediting</span>

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
               <div id="animation_menu" className="projects_menu_item">
                  <Link className="link" to="/animation">
                     <span className="projects_menu_item_fill">Animation</span>
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
               <div id="colorgrading_menu" className="projects_menu_item">
                  <Link className="link" to="/colorgrading">
                     <span className="projects_menu_item_fill">Colorgrading</span>
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
   )
}
