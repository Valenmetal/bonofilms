import video from "../assets/vid/banners/Banner Home VIDEOEDITING.mp4"
import AndreCassiano from "/AndreCassiano.mp4"
import AndreCassiano15seg from "/Andre Cassiano.mp4"
import Fandelier from "/Fandelier.mp4"
import Interview_Tacoma_Farmers from "/Interview_Tacoma_Farmers.mp4"
import Interview_Tacoma_Farmers15seg from "/Interview_Tacoma_Farmers15seg.mp4"
import MADA_1 from "/MADA_1.mp4"
import MADA_3 from "/MADA_3.mp4"
import Max_Drifting from "/Max_Drifting.mp4"
import Max_Drifting15seg from "/Max_Drifting15seg.mp4"
import Mercy from "/Mercy.mp4"
import Mercy15seg from "/Mercy15seg.mp4"
import Olive_Group from "/Olive_Group.mp4"
import Olive_Group15seg from "/Olive_Group15seg.mp4"
import PanchoVertical from "/PanchoVertical.mp4"
import PanchoVertical15seg from "/PanchoVertical15seg.mp4"
import Pancho from "/Pancho.mp4"
import Pancho15seg from "/Pancho15seg.mp4"
import Sprague from "/Sprague.mp4"
import Sprague15seg from "/Sprague15seg.mp4"
import Tacoma_Farmers from "/Tacoma_Farmers.mp4"
import Tacoma_Farmers15seg from "/Tacoma_Farmers15seg.mp4"
import Tapps_Electrics from "/Tapps_Electrics.mp4"
import Tapps_Electrics15seg from "/Tapps_Electrics15seg.mp4"
import Vendimia from "/Vendimia.mp4"
import Vendimia15seg from "/Vendimia15seg.mp4"
import Zee from "/Zee.mp4"
import Zee15seg from "/Zee15seg.mp4"
import ZOOM_TRB from "/ZOOM_TRB.mp4"
import ZOOM_TRB15seg from "/ZOOM_TRB15seg.mp4"
import AveryJason from "/AveryJason.mp4"
import AveryJason15seg from "/AveryJason15seg.mp4"
import CaitlynThomas from "/CaitlynThomas.mp4"
import CaitlynThomas15seg from "/CaitlynThomas15seg.mp4"
import ChristinaMatth from "/ChristinaMatth.mp4"
import ChristinaMatth15seg from "/ChristinaMatth15seg.mp4"
import geishachris from "/geishachris.mp4"
import geishachris15seg from "/geishachris15seg.mp4"
import Jacki from "/Jacki.mp4"
import Jacki15seg from "/Jacki15seg.mp4"
import JessicaNick from "/JessicaNick.mp4"
import JessicaNick15seg from "/JessicaNick15seg.mp4"
import Jennifer from "/Jennifer.mp4"
import Jennifer15seg from "/Jennifer15seg.mp4"
import KatiChris from "/KatiChris.mp4"
import KatiChris15seg from "/KatiChris15seg.mp4"
import LindsayNick from "/LindsayNick.mp4"
import LindsayNick15seg from "/LindsayNick15seg.mp4"
import Sunny1 from "/Sunny1.mp4"
import Sunny2 from "/Sunny2.mp4"
import Sunny3 from "/Sunny3.mp4"
import Sunny4 from "/Sunny4.mp4"

import React, { useRef, useState } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import mini_Filmmaking from "../assets/vid/mini/Miniatura_FILMMAKING.mp4"
import mini_Animation from "../assets/vid/mini/Miniatura_ANIMACION.mp4"
import mini_Colorgrading from "../assets/vid/mini/Miniatura_COLORGRADING.mp4"
import Carrousel from "../components/Carrousel"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/navigation"
import { Modal } from "../components/Modal"
import AnimatedLink from '../components/AnimatedLink';

const Videoediting = () => {
   const work_container = useRef()
   const projects_menu_grid = useRef()

   useGSAP(
      () => {
         gsap.from(".work_title,#docummentary", {
            opacity: 0,
            y: 100,
            stagger: 0.1,
         })
      },
      { scope: work_container }
   )

   useGSAP(
      () => {
         gsap.to(".projects_menu_item_fill", {
            scrollTrigger: {
               trigger: "#animation_menu",
               start: "-75% center",
               duration: 0.1,
            },
            width: "100%",
         })
         gsap.to(".projects_menu_item_fill", {
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
      { scope: projects_menu_grid }
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
               <h2 id="docummentary" className="carrousel-title">
                  Docummentary
               </h2>
               <Swiper
                  grabCursor={true}
                  navigation={true}
                  breakpoints={{
                     768: {
                        slidesPerView: 1.5,
                     },
                     0: {
                        slidesPerView: 1.1,
                     },
                  }}
                  spaceBetween={10}
                  loop={true}
                  modules={[Navigation]}>
                  <SwiperSlide>
                     <div onClick={() => handleClick(Interview_Tacoma_Farmers)}>
                        <video
                           style={{ pointerEvents: "none" }}
                           autoPlay
                           muted
                           loop

                           src={Interview_Tacoma_Farmers15seg}></video>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div onClick={() => handleClick(Vendimia)}>
                        <video
                           style={{ pointerEvents: "none" }}
                           autoPlay
                           muted
                           loop

                           src={Vendimia15seg}></video>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div onClick={() => handleClick(Tacoma_Farmers)}>
                        <video
                           style={{ pointerEvents: "none" }}
                           autoPlay
                           muted
                           loop

                           src={Tacoma_Farmers15seg}></video>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div onClick={() => handleClick(AndreCassiano)}>
                        <video
                           style={{ pointerEvents: "none" }}
                           autoPlay
                           muted
                           loop

                           src={AndreCassiano15seg}></video>
                     </div>
                  </SwiperSlide>
               </Swiper>

               <h2 id="wedding" className="carrousel-title">
                  Wedding
               </h2>
               <Swiper
                  grabCursor={true}
                  navigation={true}
                  spaceBetween={10}
                  breakpoints={{
                     1200: {
                        slidesPerView: 5.1,
                     },
                     522: {
                        slidesPerView: 3.1,
                     },
                     0: {
                        slidesPerView: 2.1,
                     },
                  }}
                  modules={[Navigation]}
                  className="mySwiper">
                  <SwiperSlide>
                     <div onClick={() => handleClick(AveryJason)}>
                        <video
                           className="mySwiper"
                           style={{ pointerEvents: "none" }}
                           autoPlay
                           muted
                           loop

                           src={AveryJason15seg}></video>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div onClick={() => handleClick(CaitlynThomas)}>
                        <video
                           className="mySwiper"
                           style={{ pointerEvents: "none" }}
                           autoPlay
                           muted
                           loop

                           src={CaitlynThomas15seg}></video>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div onClick={() => handleClick(ChristinaMatth)}>
                        <video
                           className="mySwiper"
                           style={{ pointerEvents: "none" }}
                           autoPlay
                           muted
                           loop

                           src={ChristinaMatth15seg}></video>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div onClick={() => handleClick(geishachris)}>
                        <video
                           className="mySwiper"
                           style={{ pointerEvents: "none" }}
                           autoPlay
                           muted
                           loop

                           src={geishachris15seg}></video>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div onClick={() => handleClick(Jacki)}>
                        <video
                           className="mySwiper"
                           style={{ pointerEvents: "none" }}
                           autoPlay
                           muted
                           loop

                           src={Jacki15seg}></video>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div onClick={() => handleClick(Jennifer)}>
                        <video
                           className="mySwiper"
                           style={{ pointerEvents: "none" }}
                           autoPlay
                           muted
                           loop

                           src={Jennifer15seg}></video>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div onClick={() => handleClick(JessicaNick)}>
                        <video
                           className="mySwiper"
                           style={{ pointerEvents: "none" }}
                           autoPlay
                           muted
                           loop

                           src={JessicaNick15seg}></video>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div onClick={() => handleClick(KatiChris)}>
                        <video
                           className="mySwiper"
                           style={{ pointerEvents: "none" }}
                           autoPlay
                           muted
                           loop

                           src={KatiChris15seg}></video>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div onClick={() => handleClick(LindsayNick)}>
                        <video
                           className="mySwiper"
                           style={{ pointerEvents: "none" }}
                           autoPlay
                           muted
                           loop

                           src={LindsayNick15seg}></video>
                     </div>
                  </SwiperSlide>
               </Swiper>

               <h2 id="socialmedia" className="carrousel-title">
                  Social Media
               </h2>
               <Swiper
                  grabCursor={true}
                  navigation={true}
                  spaceBetween={10}
                  breakpoints={{
                     1200: {
                        slidesPerView: 5.1,
                     },
                     522: {
                        slidesPerView: 3.1,
                     },
                     0: {
                        slidesPerView: 2.1,
                     },
                  }}
                  modules={[Navigation]}>
                  <SwiperSlide>
                     <div onClick={() => handleClick(Zee)}>
                        <video
                           className="mySwiper"
                           style={{ pointerEvents: "none" }}
                           autoPlay
                           muted
                           loop

                           src={Zee15seg}></video>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div onClick={() => handleClick(PanchoVertical)}>
                        <video
                           className="mySwiper"
                           style={{ pointerEvents: "none" }}
                           autoPlay
                           muted
                           loop

                           src={PanchoVertical15seg}></video>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div onClick={() => handleClick(Sunny1)}>
                        <video
                           className="mySwiper"
                           style={{ pointerEvents: "none" }}
                           autoPlay
                           muted
                           loop

                           src={Sunny1}></video>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div onClick={() => handleClick(Sunny2)}>
                        <video
                           className="mySwiper"
                           style={{ pointerEvents: "none" }}
                           autoPlay
                           muted
                           loop

                           src={Sunny2}></video>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div onClick={() => handleClick(Sunny3)}>
                        <video
                           className="mySwiper"
                           style={{ pointerEvents: "none" }}
                           autoPlay
                           muted
                           loop

                           src={Sunny3}></video>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div onClick={() => handleClick(Sunny4)}>
                        <video
                           className="mySwiper"
                           style={{ pointerEvents: "none" }}
                           autoPlay
                           muted
                           loop

                           src={Sunny4}></video>
                     </div>
                  </SwiperSlide>
               </Swiper>
               <Swiper
                  grabCursor={true}
                  navigation={true}
                  breakpoints={{
                     768: {
                        slidesPerView: 2.9,
                     },
                     522: {
                        slidesPerView: 2.1,
                     },
                     0: {
                        slidesPerView: 1.5,
                     },
                  }}
                  spaceBetween={10}
                  // loop={true}

                  modules={[Navigation]}
                  className="mySwiper">
                  <SwiperSlide>
                     <div onClick={() => handleClick(MADA_1)}>
                        <video
                           className="mySwiper"
                           style={{ pointerEvents: "none" }}
                           autoPlay
                           muted
                           loop

                           src={MADA_1}></video>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div onClick={() => handleClick(Fandelier)}>
                        <video
                           className="mySwiper"
                           style={{ pointerEvents: "none" }}
                           autoPlay
                           muted
                           loop

                           src={Fandelier}></video>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div onClick={() => handleClick(MADA_3)}>
                        <video
                           className="mySwiper"
                           style={{ pointerEvents: "none" }}
                           autoPlay
                           muted
                           loop

                           src={MADA_3}></video>
                     </div>
                  </SwiperSlide>
               </Swiper>
               <h2 id="Commercial" className="carrousel-title">
                  Commercial
               </h2>
               <Swiper
                  grabCursor={true}
                  navigation={true}
                  loop={true}
                  breakpoints={{
                     768: {
                        slidesPerView: 1.5,
                     },
                     0: {
                        slidesPerView: 1.1,
                     },
                  }}
                  spaceBetween={10}
                  modules={[Navigation]}>
                  <SwiperSlide>
                     <div onClick={() => handleClick(Tapps_Electrics)}>
                        <video
                           style={{ pointerEvents: "none" }}
                           autoPlay
                           muted
                           loop

                           src={Tapps_Electrics15seg}></video>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div onClick={() => handleClick(Mercy)}>
                        <video
                           style={{ pointerEvents: "none" }}
                           autoPlay
                           muted
                           loop

                           src={Mercy15seg}></video>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div onClick={() => handleClick(Max_Drifting)}>
                        <video
                           style={{ pointerEvents: "none" }}
                           autoPlay
                           muted
                           loop

                           src={Max_Drifting15seg}></video>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div onClick={() => handleClick(Pancho)}>
                        <video
                           style={{ pointerEvents: "none" }}
                           autoPlay
                           muted
                           loop

                           src={Pancho15seg}></video>
                     </div>
                  </SwiperSlide>
               </Swiper>

               <h2 id="corporate" className="carrousel-title">
                  Corporate
               </h2>
               <Swiper
                  grabCursor={true}
                  navigation={true}
                  loop={true}
                  breakpoints={{
                     768: {
                        slidesPerView: 1.5,
                     },
                     0: {
                        slidesPerView: 1.1,
                     },
                  }}
                  spaceBetween={10}
                  modules={[Navigation]}>
                  <SwiperSlide>
                     <div onClick={() => handleClick(Sprague)}>
                        <video
                           style={{ pointerEvents: "none" }}
                           autoPlay
                           muted
                           loop

                           src={Sprague15seg}></video>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div onClick={() => handleClick(ZOOM_TRB)}>
                        <video
                           style={{ pointerEvents: "none" }}
                           autoPlay
                           muted
                           loop

                           src={ZOOM_TRB15seg}></video>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div onClick={() => handleClick(Olive_Group)}>
                        <video
                           style={{ pointerEvents: "none" }}
                           autoPlay
                           muted
                           loop

                           src={Olive_Group15seg}></video>
                     </div>
                  </SwiperSlide>
               </Swiper>

               <h2 id="youtube" className="carrousel-title">
                  Youtube
               </h2>
               <Swiper
                  grabCursor={true}
                  navigation={true}
                  breakpoints={{
                     768: {
                        slidesPerView: 1.5,
                     },
                     0: {
                        slidesPerView: 1.1,
                     },
                  }}
                  spaceBetween={10}
                  loop={true}
                  modules={[Navigation]}>
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
                  <SwiperSlide>
                     <iframe
                        className="iframe-carrousel"
                        src="https://www.youtube.com/embed/f3W7trZ_nJk"
                        title="15 Min Strong ABS &amp; Core No Equipment, No Repeat"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen></iframe>
                  </SwiperSlide>
               </Swiper>
            </div>

            {isModalOpen && (
               <Modal
                  selectedVideo={selectedVideo}
                  setIsModalOpen={setIsModalOpen}
                  setSelectedVideo={setSelectedVideo}
               />
            )}

            <Carrousel texts={texts} interval={3000} />
         </div>

         <section className="projects_menu_section">
            <div ref={projects_menu_grid} className="projects_menu_grid">
               <div id="filmmaking_menu" className="projects_menu_item">
                  <AnimatedLink className="link" to="/filmmaking">
                     <span className="projects_menu_item_fill">Filmmaking</span>
                     <span id="ghost">Film</span>
                     <video
                        autoPlay
                        muted
                        loop
                        id="filmmaking_mini"
                        className="poject_mini"
                        src={mini_Filmmaking}></video>
                     <span id="ghost">making</span>
                  </AnimatedLink>
               </div>
               <div id="animation_menu" className="projects_menu_item">
                  <AnimatedLink className="link" to="/animation">
                     <span className="projects_menu_item_fill">Animation</span>
                     <span id="ghost">Animation</span>
                     <video
                        autoPlay
                        muted
                        loop
                        id="animation_mini"
                        className="poject_mini"
                        src={mini_Animation}></video>
                  </AnimatedLink>
               </div>
               <div id="colorgrading_menu" className="projects_menu_item">
                  <AnimatedLink className="link" to="/colorgrading">
                     <span className="projects_menu_item_fill">Colorgrading</span>
                     <span id="ghost">Colorgrading</span>
                     <video
                        autoPlay
                        muted
                        loop
                        id="colorgrading_mini"
                        className="poject_mini"
                        src={mini_Colorgrading}></video>
                  </AnimatedLink>
               </div>
            </div>
         </section>
      </section>
   )
}

export default Videoediting
