import React, { useEffect } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"
import { useTeamScroll } from "./TeamScrollContext"
import { useLanguage } from "../context/LanguageContext"
import { translations } from "../data/translations"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/navigation"

gsap.registerPlugin(ScrollTrigger)

export default function Team() {
   const { teamRef } = useTeamScroll()
   const { language } = useLanguage()
   const t = translations[language].team

   // Función para activar y desactivar el brillo aleatoriamente
   useEffect(() => {
      const strongElements = document.querySelectorAll("strong")

      function toggleGlow() {
         strongElements.forEach((word) => {
            // Generar un número aleatorio para decidir si activar el brillo
            const shouldGlow = Math.random() > 0.5 // 50% de probabilidad
            if (shouldGlow) {
               word.classList.add("active")
            } else {
               word.classList.remove("active")
            }
         })
      }

      // Activar la función cada cierto intervalo
      const interval = setInterval(toggleGlow, 1000) // Cambia cada segundo

      // Cleanup para prevenir memory leaks
      return () => clearInterval(interval)
   }, [language])

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

         // Parallax Effects
         // Team 1 (Alan)
         gsap.to("#team-1 img", {
            scrollTrigger: {
               trigger: "#team-1",
               start: "top bottom",
               end: "bottom top",
               scrub: 1,
            },
            y: 80,
            ease: "none"
         })
         gsap.to("#team-1 .prose", {
            scrollTrigger: {
               trigger: "#team-1",
               start: "top bottom",
               end: "bottom top",
               scrub: 1,
            },
            y: -80,
            ease: "none"
         })

         // Team 2 (Milena)
         gsap.to("#team-2 img", {
            scrollTrigger: {
               trigger: "#team-2",
               start: "top bottom",
               end: "bottom top",
               scrub: 1,
            },
            y: 80,
            ease: "none"
         })
         gsap.to("#team-2 .prose", {
            scrollTrigger: {
               trigger: "#team-2",
               start: "top bottom",
               end: "bottom top",
               scrub: 1,
            },
            y: -80,
            ease: "none"
         })
      },
      { scope: ".work_container" }
   )

   return (
      <section ref={teamRef} id="team_section" className="team_section">
         <main className="work_container">
            <h1 className="team_title">{t.title}</h1>
            <div className="team_container">
               <div id="team-1" className="team_member">
                  <img
                     src="/PrinciAlan.webp"
                     alt="Alan Lutricuso - Filmmaker, Videoeditor and Colorist"
                  />
                  <p className="prose" dangerouslySetInnerHTML={{ __html: t.alan }} />
               </div>
               <div id="team-2" className="team_member">
                  <p className="prose" dangerouslySetInnerHTML={{ __html: t.lucas }} />
                  <img
                     src="/PrincipalMile.webp"
                     alt="Milena Arias - Filmmaker, Videoeditor and Colorist"
                  />
               </div>
            </div>
            <Swiper
               grabCursor={true}
               centeredSlides={true}
               breakpoints={{
                  768: {
                     slidesPerView: 1,
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
               {[...Array(20).keys()].map((i) => (
                  <SwiperSlide key={i}>
                     <img src={`/${i}.webp`} alt={`Bonofilms team behind the scenes photo ${i + 1}`} loading="lazy" />
                  </SwiperSlide>
               ))}
            </Swiper>
         </main>
      </section>
   )
}
