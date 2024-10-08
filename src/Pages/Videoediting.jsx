import video from "../assets/vid/banners/Banner Home VIDEOEDITING.mp4"
import AndreCassiano from "/AndreCassiano.mp4"
import Fandelier from "/Fandelier.mp4"
import Interview_Tacoma_Farmers from "/Interview_Tacoma_Farmers.mp4"
import MADA_1 from "/MADA_1.mp4"
// import MADA_2 from "/MADA_2.mp4"
import MADA_3 from "/MADA_3.mp4"
import Max_Drifting from "/Max_Drifting.mp4"
import Mercy from "/Mercy.mp4"
import Olive_Group from "/Olive_Group.mp4"
import PanchoVertical from "/PanchoVertical.mp4"
import Pancho from "/Pancho.mp4"
import Sprague from "/Sprague.mp4"
import Tacoma_Farmers from "/Tacoma_Farmers.mp4"
import Tapps_Electrics from "/Tapps_Electrics.mp4"
import Zee from "/Zee.mp4"
import ZOOM_TRB from "/ZOOM_TRB.mp4"
import AveryJason from "/AveryJason.mp4"
import CaitlynThomas from "/CaitlynThomas.mp4"
import ChristinaMatth from "/ChristinaMatth.mp4"
import geishachris from "/geishachris.mp4"
import Jacki from "/Jacki.mp4"
import JessicaNick from "/JessicaNick.mp4"
import Jennifer from "/Jennifer.mp4"
import KatiChris from "/KatiChris.mp4"
import LindsayNick from "/LindsayNick.mp4"

import React, { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { Link } from "react-router-dom"
import mini_Filmmaking from "../assets/vid/mini/Miniatura_FILMMAKING.mp4"
import mini_Animation from "../assets/vid/mini/Miniatura_ANIMACION.mp4"
import mini_Colorgrading from "../assets/vid/mini/Miniatura_COLORGRADING.mp4"
import Carrousel from "../components/Carrousel"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Navigation } from "swiper/modules"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"

const Videoediting = () => {
   const work_container = useRef()
   const pojects_menu_grid = useRef()
   useEffect(() => {
      const handlePointerMove = (e) => {
         e.target.setAttribute("controls", true)
      }

      const handlePointerOut = (e) => {
         e.target.removeAttribute("controls")
      }

      const videoElements = document.querySelectorAll("#videoediting_video")
      videoElements.forEach((video) => {
         video.addEventListener("pointermove", handlePointerMove)
         video.addEventListener("pointerout", handlePointerOut)
      })

      return () => {
         videoElements.forEach((video) => {
            video.removeEventListener("pointermove", handlePointerMove)
            video.removeEventListener("pointerout", handlePointerOut)
         })
      }
   }, [])
   useGSAP(
      () => {
         gsap.from(".work_title", {
            opacity: 0,
            y: 100,
         })
         gsap.from(".carrousel-title", {
            opacity: 0,
            y: 100,
            delay: 0.5,
         })
      },
      { scope: work_container }
   )

   useGSAP(
      () => {
         gsap.to(".pojects_menu_item_fill", {
            scrollTrigger: {
               trigger: "#animation_menu",
               start: "-75% center",
               duration: 0.1,
            },
            width: "100%",
         })
         gsap.to(".pojects_menu_item_fill", {
            scrollTrigger: {
               trigger: "#animation_menu",
               start: "-75% center",
            },
            autoAlpha: 0,
            delay: 0.4,
         })
         gsap.to("#ghost", {
            scrollTrigger: {
               trigger: "#animation_menu",
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
      { scope: pojects_menu_grid }
   )

   const texts = [
      '"Alan, is an exceptional video producer. Not just an editor, but a creative director. We will definitely work with him if we have a project in the future in video."',
      '"Was able to stick through the project and make changes on the fly."',
      '"Great job, thank you for the good work!"',
      '"Complete professional that I recommend, delivering every detail of my perfectionist screenplay and responded to suggestions for revisions without a hitch."',
      '"Great skills in action fast-paced editing, track and scene sync, VFX effects and 2D animation."',
      '"Did a really really good edit job. We struggled at first with the colour grading but the issue was fixed. Thank you"',
      '"Great work! did precisely what was asked in a timely fashion and with great quality!"',
      '"Bono Films did a great job delivering what I asked for. Will work with again in the future."',
   ]

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

   return (
      <section className="page_section">
         <div ref={work_container} className="work_container">
            <div className="banner_container">
               <video
                  autoPlay
                  muted
                  loop
                  src={video}
                  className="banner_videoediting"></video>
            </div>
            <h1 id="Videoediting_title" className="work_title">
               Videoediting
            </h1>
            <h1 className="work_title work_title_stroke">Videoediting</h1>

            <div style={{ width: "99%" }} className="work_grid">
               <h2 className="carrousel-title">Docummentary</h2>
               <Swiper
                  grabCursor={true}
                  navigation={true}
                  slidesPerView={1.1}
                  spaceBetween={10}
                  loop={true}
                  coverflowEffect={{
                     modifier: 1,
                     slideShadows: false,
                  }}
                  modules={[EffectCoverflow, Navigation]}
                  className="mySwiper">
                  <SwiperSlide>
                     <div onClick={() => handleClick(Interview_Tacoma_Farmers)}>
                        <video
                           style={{ pointerEvents: "none" }}
                           autoPlay
                           muted
                           loop
                           id="videoediting_video"
                           src={Interview_Tacoma_Farmers}></video>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div onClick={() => handleClick(Tacoma_Farmers)}>
                        <video
                           style={{ pointerEvents: "none" }}
                           autoPlay
                           muted
                           loop
                           id="videoediting_video"
                           src={Tacoma_Farmers}></video>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div onClick={() => handleClick(AndreCassiano)}>
                        <video
                           style={{ pointerEvents: "none" }}
                           autoPlay
                           muted
                           loop
                           id="videoediting_video"
                           src={AndreCassiano}></video>
                     </div>
                  </SwiperSlide>
               </Swiper>

               <h2 className="carrousel-title">Wedding</h2>
               <Swiper
                  grabCursor={true}
                  navigation={true}
                  slidesPerView={2.5}
                  spaceBetween={10}
                  coverflowEffect={{
                     modifier: 1,
                     slideShadows: false,
                  }}
                  modules={[EffectCoverflow, Navigation]}
                  className="mySwiper">
                  <SwiperSlide>
                     <div onClick={() => handleClick(AveryJason)}>
                        <video
                           style={{ pointerEvents: "none" }}
                           autoPlay
                           muted
                           loop
                           id="videoediting_video"
                           src={AveryJason}></video>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div onClick={() => handleClick(CaitlynThomas)}>
                        <video
                           style={{ pointerEvents: "none" }}
                           autoPlay
                           muted
                           loop
                           id="videoediting_video"
                           src={CaitlynThomas}></video>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div onClick={() => handleClick(ChristinaMatth)}>
                        <video
                           style={{ pointerEvents: "none" }}
                           autoPlay
                           muted
                           loop
                           id="videoediting_video"
                           src={ChristinaMatth}></video>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div onClick={() => handleClick(geishachris)}>
                        <video
                           style={{ pointerEvents: "none" }}
                           autoPlay
                           muted
                           loop
                           id="videoediting_video"
                           src={geishachris}></video>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div onClick={() => handleClick(Jacki)}>
                        <video
                           style={{ pointerEvents: "none" }}
                           autoPlay
                           muted
                           loop
                           id="videoediting_video"
                           src={Jacki}></video>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div onClick={() => handleClick(Jennifer)}>
                        <video
                           style={{ pointerEvents: "none" }}
                           autoPlay
                           muted
                           loop
                           id="videoediting_video"
                           src={Jennifer}></video>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div onClick={() => handleClick(JessicaNick)}>
                        <video
                           style={{ pointerEvents: "none" }}
                           autoPlay
                           muted
                           loop
                           id="videoediting_video"
                           src={JessicaNick}></video>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div onClick={() => handleClick(KatiChris)}>
                        <video
                           style={{ pointerEvents: "none" }}
                           autoPlay
                           muted
                           loop
                           id="videoediting_video"
                           src={KatiChris}></video>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div onClick={() => handleClick(LindsayNick)}>
                        <video
                           style={{ pointerEvents: "none" }}
                           autoPlay
                           muted
                           loop
                           id="videoediting_video"
                           src={LindsayNick}></video>
                     </div>
                  </SwiperSlide>
               </Swiper>

               <h2 className="carrousel-title">Social Media</h2>
               <Swiper
                  grabCursor={true}
                  navigation={true}
                  slidesPerView={2.5}
                  spaceBetween={10}
                  loop={true}
                  coverflowEffect={{
                     modifier: 1,
                     slideShadows: false,
                  }}
                  modules={[EffectCoverflow, Navigation]}
                  className="mySwiper">
                  <SwiperSlide>
                     <div onClick={() => handleClick(Zee)}>
                        <video
                           style={{ pointerEvents: "none" }}
                           autoPlay
                           muted
                           loop
                           id="videoediting_video"
                           src={Zee}></video>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div onClick={() => handleClick(PanchoVertical)}>
                        <video
                           style={{ pointerEvents: "none" }}
                           autoPlay
                           muted
                           loop
                           id="videoediting_video"
                           src={PanchoVertical}></video>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div onClick={() => handleClick(Zee)}>
                        <video
                           style={{ pointerEvents: "none" }}
                           autoPlay
                           muted
                           loop
                           id="videoediting_video"
                           src={Zee}></video>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div onClick={() => handleClick(PanchoVertical)}>
                        <video
                           style={{ pointerEvents: "none" }}
                           autoPlay
                           muted
                           loop
                           id="videoediting_video"
                           src={PanchoVertical}></video>
                     </div>
                  </SwiperSlide>
               </Swiper>
               <Swiper
                  grabCursor={true}
                  navigation={true}
                  slidesPerView={1.5}
                  spaceBetween={10}
                  loop={true}
                  coverflowEffect={{
                     modifier: 1,
                     slideShadows: false,
                  }}
                  modules={[EffectCoverflow, Navigation]}
                  className="mySwiper">
                  <SwiperSlide>
                     <div onClick={() => handleClick(MADA_1)}>
                        <video
                           style={{ pointerEvents: "none" }}
                           autoPlay
                           muted
                           loop
                           id="videoediting_video"
                           src={MADA_1}></video>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div onClick={() => handleClick(Fandelier)}>
                        <video
                           style={{ pointerEvents: "none" }}
                           autoPlay
                           muted
                           loop
                           id="videoediting_video"
                           src={Fandelier}></video>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div onClick={() => handleClick(MADA_3)}>
                        <video
                           style={{ pointerEvents: "none" }}
                           autoPlay
                           muted
                           loop
                           id="videoediting_video"
                           src={MADA_3}></video>
                     </div>
                  </SwiperSlide>
               </Swiper>

               <h2 className="carrousel-title">Commercial</h2>
               <Swiper
                  grabCursor={true}
                  navigation={true}
                  loop={true}
                  slidesPerView={1.1}
                  spaceBetween={10}
                  coverflowEffect={{
                     modifier: 1,
                     slideShadows: false,
                  }}
                  modules={[EffectCoverflow, Navigation]}
                  className="mySwiper">
                  <SwiperSlide>
                     <div onClick={() => handleClick(Tapps_Electrics)}>
                        <video
                           style={{ pointerEvents: "none" }}
                           autoPlay
                           muted
                           loop
                           id="videoediting_video"
                           src={Tapps_Electrics}></video>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div onClick={() => handleClick(Mercy)}>
                        <video
                           style={{ pointerEvents: "none" }}
                           autoPlay
                           muted
                           loop
                           id="videoediting_video"
                           src={Mercy}></video>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div onClick={() => handleClick(Max_Drifting)}>
                        <video
                           style={{ pointerEvents: "none" }}
                           autoPlay
                           muted
                           loop
                           id="videoediting_video"
                           src={Max_Drifting}></video>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div onClick={() => handleClick(Pancho)}>
                        <video
                           style={{ pointerEvents: "none" }}
                           autoPlay
                           muted
                           loop
                           id="videoediting_video"
                           src={Pancho}></video>
                     </div>
                  </SwiperSlide>
               </Swiper>

               <h2 className="carrousel-title">Corporate</h2>
               <Swiper
                  grabCursor={true}
                  navigation={true}
                  loop={true}
                  slidesPerView={1.1}
                  spaceBetween={10}
                  coverflowEffect={{
                     modifier: 1,
                     slideShadows: false,
                  }}
                  modules={[EffectCoverflow, Navigation]}
                  className="mySwiper">
                  <SwiperSlide>
                     <div onClick={() => handleClick(Sprague)}>
                        <video
                           style={{ pointerEvents: "none" }}
                           autoPlay
                           muted
                           loop
                           id="videoediting_video"
                           src={Sprague}></video>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div onClick={() => handleClick(ZOOM_TRB)}>
                        <video
                           style={{ pointerEvents: "none" }}
                           autoPlay
                           muted
                           loop
                           id="videoediting_video"
                           src={ZOOM_TRB}></video>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div onClick={() => handleClick(Olive_Group)}>
                        <video
                           style={{ pointerEvents: "none" }}
                           autoPlay
                           muted
                           loop
                           id="videoediting_video"
                           src={Olive_Group}></video>
                     </div>
                  </SwiperSlide>
               </Swiper>

               <h2 className="carrousel-title">Youtube</h2>
               <Swiper
                  grabCursor={true}
                  navigation={true}
                  slidesPerView={1.1}
                  spaceBetween={10}
                  loop={true}
                  coverflowEffect={{
                     modifier: 1,
                     slideShadows: false,
                  }}
                  modules={[EffectCoverflow, Navigation]}>
                  <SwiperSlide>
                     <iframe
                        className="iframe-carrousel"
                        src="https://www.youtube.com/embed/WMASl9qsoRE"
                        title="Talent Cards LMS 2024: Comprehensive Review &amp; Tutorial"
                        allow="autoplay"
                        autoPlay
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen></iframe>
                  </SwiperSlide>
                  <SwiperSlide>
                     <iframe
                        className="iframe-carrousel"
                        src="https://www.youtube.com/embed/m5hGwGN65Ms"
                        title="Ultimate Talent LMS 2024 Review: Features, Pricing, and Setup Guide"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen></iframe>
                  </SwiperSlide>
                  <SwiperSlide>
                     <iframe
                        className="iframe-carrousel"
                        src="https://www.youtube.com/embed/qwzHqNJ_KGI"
                        title="How Russia and the USA Would Actually Fight Each Other"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen></iframe>
                  </SwiperSlide>
                  <SwiperSlide>
                     <iframe
                        className="iframe-carrousel"
                        src="https://www.youtube.com/embed/MsEXPjgWqOc"
                        title='IT&#39;S ABOUT TO GET CRAZY!!! | Demon Slayer Season 4 Episode 1 Reaction "To Defeat Muzan Kibutsuji"'
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen></iframe>
                  </SwiperSlide>
                  <SwiperSlide>
                     <iframe
                        className="iframe-carrousel"
                        src="https://www.youtube.com/embed/uSsW5HHfKFw"
                        title="The Phases of New Construction Home Builds | The Denver Real Estate Agent"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen></iframe>
                  </SwiperSlide>
               </Swiper>
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

            <Carrousel texts={texts} interval={3000} />
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
   )
}

export default Videoediting
