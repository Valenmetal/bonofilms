import { React } from "react";
import video from "../assets/vid/bono-hero.mp4";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";
import mundo from "../assets/mundo.png";
gsap.registerPlugin(CustomEase);

export default function Hero() {
   useGSAP(() => {
      let tl = gsap.timeline({ Defaults: { Easing: "Expo.EaseOut" } });
      /* let mm = gsap.matchMedia(); */

      tl.to(".text-reveal", {
         clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
         delay: 0.3,
         y: "0",
         duration: 1,
      })
         .fromTo(
            ".title-reveal",
            { y: "0" },
            {
               y: "0",
               clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
               duration: 2,
               ease: CustomEase.create(
                  "custom",
                  "M0,0 C0.067,0.132 0.01,0.634 0.273,0.886 0.414,1.021 0.822,1 1,1 "
               ),
            }
         )
         .to(".title-reveal,.text-reveal", {
            clipPath: "polygon(0 0, 0% 0, 0% 100%, 0% 100%)",
            stagger: 0.2,
         })
         .from(
            ".bg",
            {
               scale: 0.6,
               duration: 2,
               opacity: 0,
               ease: "Expo.easeOut",
            },
            ">"
         )
         .to(
            ".text-reveal, .title-reveal",
            {
               y: "320px",
               duration: 0,
            },
            "-=1"
         )
         .to(
            ".text-reveal, .title-reveal",
            {
               clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
               stagger: 0.2,
            },
            "-=1"
         );
      /*  mm.add("(max-width: 522px)", () => {
         let tl = gsap.timeline({ Defaults: { Easing: "Expo.EaseOut" } });

         tl.to(
            ".text-reveal",
            {
               clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
               delay: 0.3,
               duration: 1,
            },
            ">"
         )
            .to(
               ".title-reveal",
               {
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                  duration: 2,
                  ease: CustomEase.create(
                     "custom",
                     "M0,0 C0.067,0.132 0.01,0.634 0.273,0.886 0.414,1.021 0.822,1 1,1 "
                  ),
               },
               ">"
            )
            .to(
               ".title-reveal,.text-reveal",
               {
                  clipPath: "polygon(0 0, 0% 0, 0% 100%, 0% 100%)",
                  stagger: 0.2,
               },
               ">"
            )

            .to(
               ".text-reveal, .title-reveal",
               {
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                  stagger: 0.2,
               },
               ">"
            ); 
        
      });*/
   }, ".hero");

   return (
      <section id="me" className="hero">
         <video autoPlay muted loop className="bg" src={video}></video>

         <main className="container">
            <div className="content">
               <p className="text-reveal">
                  Filmmaking company based in Buenos Aires AR
                  <img src={mundo} alt="" />
               </p>
               <h1 className="title-reveal">BONOFILMS</h1>
            </div>
         </main>
      </section>
   );
}
