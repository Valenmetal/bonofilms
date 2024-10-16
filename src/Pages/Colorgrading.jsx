import video from "../assets/vid/banners/Banner Home COLORGRADING.mp4"
import ClaseMADA from "/ClaseMADA.mp4"
import Rio from "/Rio.mp4"
import EmiliaCafe from "/EmiliaCafe.mp4"
import Handball from "/Handball.mp4"
import Pancho from "/Pancho.mp4"
import Pasta from "/Pasta.mp4"

import { useRef, useState } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { Link } from "react-router-dom"
import mini_Filmmaking from "../assets/vid/mini/Miniatura_FILMMAKING.mp4"
import mini_Videoediting from "../assets/vid/mini/Miniatura_VIDEOEDITING.mp4"
import mini_Animation from "../assets/vid/mini/Miniatura_ANIMACION.mp4"

const Colorgrading = () => {
   const work_container = useRef()
   const pojects_menu_grid = useRef()

   const [isModalOpen, setIsModalOpen] = useState(false)
   const [selectedVideo, setSelectedVideo] = useState("")

   const handleClick = (videoSrc) => {
      setSelectedVideo(videoSrc) // Guarda el video que se va a mostrar en el modal
      setIsModalOpen(true) // Abre el modal
   }

   const closeModal = () => {
      setIsModalOpen(false)
      setSelectedVideo("") // Limpia el video seleccionado al cerrar
   }
   const handleOutsideClick = (event) => {
      if (event.target.className === "modal") {
         closeModal()
      }
   }

   useGSAP(
      () => {
         gsap.from(".work_title", {
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
         gsap.to(".pojects_menu_item_fill", {
            scrollTrigger: {
               trigger: "#videoediting_menu",
               start: "-75% center",
               duration: 0.1,
            },
            width: "100%",
         })
         gsap.to(".pojects_menu_item_fill", {
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

         gsap.from("#filmmaking_menu", {
            scrollTrigger: {
               trigger: "#filmmaking_menu",
               start: "top bottom",
               end: "top 90%",
               scrub: 1,
            },
            opacity: 0,
            y: 100,
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

         {
            let film = document.querySelector("#filmmaking_menu")
            let tl_filmmaking = gsap.timeline({ paused: true })

            tl_filmmaking.to("#filmmaking_mini", {
               duration: 0.5,
               display: "block",
               width: "100%",
            })

            film.addEventListener("mouseenter", () =>
               tl_filmmaking.timeScale(1).play()
            )
            film.addEventListener("mouseleave", () =>
               tl_filmmaking.timeScale(1.5).reverse()
            )

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
         }
      },
      { scope: pojects_menu_grid }
   )
   return (
      <section className="page_section">
         <div ref={work_container} className="work_container">
            <div className="banner_container">
               <video
                  id="Colorgrading_title"
                  autoPlay
                  muted
                  loop
                  src={video}
                  className="banner_Colorgrading"></video>
            </div>
            <h1 className="work_title">Colorgrading</h1>
            <h1 className="work_title work_title_stroke">Colorgrading</h1>

            <div className="work_grid">
               <div className="wraper">
                  <div
                     id="work1"
                     className="img_container"
                     onClick={() => handleClick(Rio)}>
                     <Link className="external-logo" to={`/colorgrading/Rio`}></Link>
                     <video
                        style={{ pointerEvents: "none" }}
                        muted
                        loop
                        id="colorgrading_video"
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
                  <div
                     id="work2"
                     className="img_container"
                     onClick={() => handleClick(ClaseMADA)}>
                     <Link
                        className="external-logo"
                        to={`/colorgrading/ClaseMADA`}></Link>
                     <video
                        style={{ pointerEvents: "none" }}
                        muted
                        loop
                        id="colorgrading_video"
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
               </div>
               <div
                  id="work3"
                  className="img_container"
                  onClick={() => handleClick(EmiliaCafe)}>
                  <Link
                     className="external-logo"
                     to={`/colorgrading/EmiliaCafe`}></Link>
                  <video
                     style={{ pointerEvents: "none" }}
                     muted
                     loop
                     id="colorgrading_video"
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
               <div className="wraper">
                  <div
                     id="work4"
                     className="img_container"
                     onClick={() => handleClick(Handball)}>
                     <Link
                        className="external-logo"
                        to={`/colorgrading/Handball`}></Link>
                     <video
                        style={{ pointerEvents: "none" }}
                        muted
                        loop
                        id="colorgrading_video"
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
                     id="work5"
                     className="img_container"
                     onClick={() => handleClick(Pancho)}>
                     <Link
                        className="external-logo"
                        to={`/colorgrading/Pancho`}></Link>
                     <video
                        style={{ pointerEvents: "none" }}
                        muted
                        loop
                        id="colorgrading_video"
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
               <div
                  id="work6"
                  className="img_container"
                  onClick={() => handleClick(Pasta)}>
                  <Link className="external-logo" to={`/colorgrading/Pasta`}></Link>
                  <video
                     style={{ pointerEvents: "none" }}
                     muted
                     loop
                     id="colorgrading_video"
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

               {isModalOpen && (
                  <div className="modal" onClick={handleOutsideClick}>
                     <div className="modal-content">
                        <span className="close" onClick={closeModal}>
                           &times;
                        </span>
                        <video
                           style={{ borderRadius: ".5em" }}
                           src={selectedVideo}
                           controls
                           autoPlay></video>
                     </div>
                  </div>
               )}
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
   )
}

export default Colorgrading
