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
                     src="/PrinciAlan.webp"
                     alt="Alan Lutricuso - Filmmaker, Videoeditor and Colorist"
                  />
                  <p>
                     Comencé como filmmaker independiente grabando videos para
                     distintos clientes, y editando mi propio trabajo.<br></br> En
                     2020 empecé a trabajar full-time como editor de video en Upwork
                     y otras plataformas. <br></br>Estudié en TCYM (Taller de Cine y
                     Multimedia) donde me formé para desarrollar roles como Dirección
                     de foto, eléctrico y distintos roles de camara. Tambien me
                     desenvuelvo en el area de post-producción editando video, como
                     colorista y haciendo mezcla de sonido.
                     <br></br>
                     <br></br>I started out as an independent filmmaker shooting
                     videos for clients, and editing my own work. <br></br>In 2020 I
                     went full-time working freelance as a Videoeditor on Upwork and
                     other platforms. <br></br>I studied at Film School and gain
                     experience in different areas of the film industry to cover
                     different rols such as Director, DP, Camera man, Electrician
                     amongst others. My formation also includes post-production
                     skills I developed in Videoediting, Colorgrading and Sound
                     Design.
                     <br></br>
                  </p>
               </div>
               <div id="team-2" className="team-member">
                  <p>
                     I began my journey as a video editor working with clients on
                     various projects, gaining valuable experience along the way.
                     <br></br>My passion for visual storytelling led me to study
                     animation at university for a few years, which I thoroughly
                     enjoyed. In 2020, I transitioned into full-time freelancing, and
                     I’ve been dedicated to it ever since. <br></br>Along the way,
                     I’ve completed courses in Cinematography and Color Grading,
                     which significantly enhanced my skills and the quality of my
                     editing work. <br></br>I primarily edit using DaVinci Resolve,
                     but I’m also highly proficient with a range of other tools,
                     including After Effects, Premiere Pro, Maya, Moho, Toon Boom,
                     and ZBrush. <br></br>
                     <br></br>Comencé mi camino como editora de video trabajando con
                     clientes en diversos proyectos, adquiriendo experiencia valiosa
                     en el proceso. <br></br>Mi pasión por la narración visual me
                     llevó a estudiar animación en la universidad durante algunos
                     años, algo que disfruté mucho. En 2020, di el paso hacia el
                     freelance a tiempo completo, y desde entonces me he dedicado
                     plenamente a ello. <br></br>A lo largo de este tiempo, realicé
                     cursos de Cinematografía y Corrección de Color, lo que mejoró
                     significativamente mis habilidades y la calidad de mi trabajo
                     como editora. Principalmente edito utilizando DaVinci Resolve,
                     pero también tengo un alto nivel de manejo en otras
                     herramientas, como After Effects, Premiere Pro, Maya, Moho,
                     Toon Boom y ZBrush.
                  </p>
                  <img
                     src="/PrincipalMile.webp"
                     alt="Milena Arias - Filmmaker, Videoeditor and Colorist"
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
                  <img src="/0.webp" alt="Alan Lutricuso" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src="/1.webp" alt="Alan Lutricuso" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src="/2.webp" alt="Alan Lutricuso" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src="/3.webp" alt="Alan Lutricuso" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src="/4.webp" alt="Alan Lutricuso" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src="/5.webp" alt="Alan Lutricuso" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src="/6.webp" alt="Alan Lutricuso" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src="/7.webp" alt="Alan Lutricuso" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src="/8.webp" alt="Alan Lutricuso" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src="/9.webp" alt="Alan Lutricuso" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src="/10.webp" alt="Alan Lutricuso" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src="/11.webp" alt="Alan Lutricuso" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src="/12.webp" alt="Alan Lutricuso" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src="/13.webp" alt="Alan Lutricuso" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src="/14.webp" alt="Alan Lutricuso" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src="/15.webp" alt="Alan Lutricuso" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src="/16.webp" alt="Alan Lutricuso" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src="/17.webp" alt="Alan Lutricuso" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src="/18.webp" alt="Alan Lutricuso" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src="/19.webp" alt="Alan Lutricuso" />
               </SwiperSlide>
            </Swiper>
         </main>
      </section>
   )
}
