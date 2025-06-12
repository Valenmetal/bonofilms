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
   const strongElements = document.querySelectorAll("strong")

   // Función para activar y desactivar el brillo aleatoriamente
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
   setInterval(toggleGlow, 1000) // Cambia cada segundo

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
               <div id="team-1" className="team_member">
                  <img
                     src="/PrinciAlan.webp"
                     alt="Alan Lutricuso - Filmmaker, Videoeditor and Colorist"
                  />
                  <p className="prose">
                     Comencé como <strong>filmmaker </strong>independiente grabando
                     videos para distintos clientes, y editando mi propio trabajo. En
                     2020 empecé a trabajar <strong>full-time</strong> como
                     <strong> editor</strong> de video en <strong>Upwork</strong> y
                     otras plataformas. Estudié en TCYM (Taller de Cine y Multimedia)
                     donde me formé para desarrollar roles como
                     <strong> Dirección de foto</strong>, eléctrico y distintos roles
                     de camara. Tambien me desenvuelvo en el area de
                     <strong> post-producción </strong>
                     editando video, como <strong>colorista</strong> y haciendo
                     mezcla de sonido.
                     <br />
                     <br /> I started out as an independent
                     <strong> filmmaker </strong> shooting videos for clients, and
                     editing my own work. In 2020 I went <strong> full-time </strong>
                     working freelance as a <strong> Videoeditor </strong> on
                     <strong> Upwork </strong>
                     and other platforms. I studied at Film School and gain
                     experience in different areas of the film industry to cover
                     different rols such as <strong>Director</strong>, DP, Camera
                     man, Electrician amongst others. My formation also includes
                     <strong> post-production </strong> skills I developed in
                     Videoediting, <strong>Colorgrading</strong> and Sound Design.
                  </p>
               </div>
               <div id="team-2" className="team_member">
                  <p className="prose">
                     Comencé mi camino como <strong>editora de video </strong>
                     trabajando con clientes en diversos proyectos, adquiriendo
                     experiencia valiosa en el proceso. Mi pasión por la
                     <strong> narración visual</strong> me llevó a estudiar animación
                     en la universidad durante algunos años, algo que disfruté mucho.
                     En 2020, di el paso hacia el
                     <strong> freelance a tiempo completo</strong>, y desde entonces
                     me he dedicado plenamente a ello. A lo largo de este tiempo,
                     realicé cursos de <strong>Cinematografía</strong> y
                     <strong> Corrección de Color</strong>, lo que mejoró
                     significativamente mis habilidades y la calidad de mi trabajo
                     como editora. Principalmente edito utilizando
                     <strong> DaVinci Resolve</strong>, pero también tengo un alto
                     nivel de manejo en otras herramientas, como
                     <strong> After Effects</strong>,<strong> Premiere Pro</strong>,{" "}
                     <strong>Maya</strong>, <strong>Moho</strong>,{" "}
                     <strong>Toon Boom</strong> y
                     <strong> ZBrush</strong>.
                     <br /> <br /> I began my journey as a{" "}
                     <strong>video editor</strong> working with clients on various
                     projects, gaining valuable experience along the way. My passion
                     for <strong>visual storytelling</strong> led me to study
                     animation at university for a few years, which I thoroughly
                     enjoyed. In 2020, I transitioned into{" "}
                     <strong>full-time freelancing</strong>, and I’ve been dedicated
                     to it ever since. Along the way, I’ve completed courses in{" "}
                     <strong>Cinematography</strong> and{" "}
                     <strong>Color Grading</strong>, which significantly enhanced my
                     skills and the quality of my editing work. I primarily edit
                     using <strong>DaVinci Resolve</strong>, but I’m also highly
                     proficient with a range of other tools, including{" "}
                     <strong>After Effects</strong>, <strong>Premiere Pro</strong>,{" "}
                     <strong>Maya</strong>, <strong>Moho</strong>,{" "}
                     <strong>Toon Boom</strong>, and <strong>ZBrush</strong>.
                  </p>
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
