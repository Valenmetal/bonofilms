import React, { useLayoutEffect } from "react";
import { LogoEmail, LogoInsta, LogoYoutube } from "../assets/Icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
   useLayoutEffect(() => {
      const ctx = gsap.context(() => {
         gsap.from(".animated-line", {
            scrollTrigger: { trigger: ".animated-line" },
            delay: 0.5,
            ease: "power4.out", // <- Divider animation
            scaleX: 0,
            duration: 3,
         });

         gsap.from(".logo-container, p", {
            scrollTrigger: { trigger: ".logo-container" },
            delay: 0.5,
            ease: "power4.out", // <- Title Animation
            opacity: 0,
            scale: 0.9,
            duration: 3,
         });
      }, ".footer"); // <- Scope

      return () => ctx.revert(); // <- Cleanup!
   }, []);
   return (
      <footer className="footer">
         <hr className="animated-line"></hr>
         <main>
            <div className="logo-container">
               <a
                  target="_blank"
                  style={{ marginRight: "1rem" }}
                  href="https://youtube.com/@bonofilms8108?si=GmPj3FUkTNFf9C9O"
                  aria-label="Youtube Channel">
                  <LogoYoutube />
               </a>
               <a
                  target="_blank"
                  style={{ marginRight: "1rem" }}
                  href="https://www.instagram.com/bonofilms/"
                  aria-label="Instagram Profile">
                  <LogoInsta />
               </a>
               <a href="mailto:Bonofilms@gmail.com" aria-label="Email Me">
                  <LogoEmail />
               </a>
            </div>
         </main>
         <p>BONOFILMS</p>
      </footer>
   );
}
