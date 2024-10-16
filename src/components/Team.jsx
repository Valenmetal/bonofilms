import { React } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/navigation"

gsap.registerPlugin(ScrollTrigger)
export default function Team() {
   useGSAP(
      () => {
         gsap.from(".team_title", {
            scrollTrigger: {
               trigger: ".team_title",
               start: "top bottom",
               end: "top center",
               scrub: 1,
            },
            opacity: 0,
            y: 100,
         })

         gsap.from("#team-1", {
            scrollTrigger: {
               trigger: "#team-1",
               start: "top bottom",
               end: "top center",
               scrub: 1,
            },
            delay: 0.2,
            opacity: 0,
            y: 100,
         })

         gsap.from("#team-2", {
            scrollTrigger: {
               trigger: "#team-2",
               start: "top bottom",
               end: "top center",
               scrub: 1,
            },
            delay: 0.2,
            opacity: 0,
            y: 100,
         })
      },
      { scope: ".work_container" }
   )
   return (
      <section id="team_section" className="team_section">
         <main className="work_container">
            <h1 className="team_title">Team</h1>
            <div className="team_container">
               <div id="team-1" className="team-member">
                  <img
                     src="/PrincipalAlan.webp"
                     alt="Alan Lutricuso - Filmmaker, Videoeditor and Colorist"
                  />
                  <p>
                     With over 5 years of experience, I’ve started out as an
                     independent filmmaker editing and colorgrading my own work. I
                     jumped into freelance working with clients on Upwork in 2020,
                     when it was hard to go out and shoot videos. <br></br> For a
                     couple of years I went to Film School to learn how to become a
                     DP, and ColorGrading started to captivate my attention and for
                     that reason I also went ahead and took courses and spent hours
                     and hours learning the craft on Youtube and other platforms.
                     <br></br> All of my work is shot on Sony Cameras, Edited and
                     Colored on Davinci Resolve.
                  </p>
               </div>
               <div id="team-2" className="team-member">
                  <p>
                     With over 5 years of experience, I’ve started out as an
                     independent filmmaker editing and colorgrading my own work. I
                     jumped into freelance working with clients on Upwork in 2020,
                     when it was hard to go out and shoot videos. <br></br> For a
                     couple of years I went to Film School to learn how to become a
                     DP, and ColorGrading started to captivate my attention and for
                     that reason I also went ahead and took courses and spent hours
                     and hours learning the craft on Youtube and other platforms.
                     <br></br> All of my work is shot on Sony Cameras, Edited and
                     Colored on Davinci Resolve.
                  </p>
                  <img
                     src="/PrincipalAlan.webp"
                     alt="Alan Lutricuso - Filmmaker, Videoeditor and Colorist"
                  />
               </div>
            </div>
            <Swiper
               grabCursor={true}
               navigation={true}
               centeredSlides={true}
               breakpoints={{
                  768: {
                     slidesPerView: 1.5,
                  },
                  0: {
                     slidesPerView: 1.1,
                  },
               }}
               spaceBetween={30}
               loop={true}
               autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
               }}
               modules={[Autoplay, Navigation]}>
               <SwiperSlide>
                  <img src="/Alan.webp" alt="Alan Lutricuso" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src="/alan4.webp" alt="Alan Lutricuso" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src="/alan5.webp" alt="Alan Lutricuso" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src="/alan6.webp" alt="Alan Lutricuso" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src="/alan7.webp" alt="Alan Lutricuso" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src="/alan8.webp" alt="Alan Lutricuso" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src="/alanauto.webp" alt="Alan Lutricuso" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src="/AlanClaqueta.webp" alt="Alan Lutricuso" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src="/AlanMile.webp" alt="Alan Lutricuso" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src="/AlanMile2.webp" alt="Alan Lutricuso" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src="/alanmile3.webp" alt="Alan Lutricuso" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src="/AlanMileJero.webp" alt="Alan Lutricuso" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src="/AlanMileLed.webp" alt="Alan Lutricuso" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src="/AlanMileRoman.webp" alt="Alan Lutricuso" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src="/Mile.webp" alt="Alan Lutricuso" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src="/Mile3.webp" alt="Alan Lutricuso" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src="/Mile2.webp" alt="Alan Lutricuso" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src="/mile4.webp" alt="Alan Lutricuso" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src="/mile5.webp" alt="Alan Lutricuso" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src="/muchagente.webp" alt="Alan Lutricuso" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src="/muchagente2.webp" alt="Alan Lutricuso" />
               </SwiperSlide>
            </Swiper>
         </main>
      </section>
   )
}
