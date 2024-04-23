import React from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";

export default function Navbar() {
   var prevScrollpos = window.scrollY;
   window.onscroll = function () {
      var currentScrollPos = window.scrollY;
      if (prevScrollpos > currentScrollPos) {
         document.getElementById("navbar").style.top = "0";
         document.getElementById("blur").style.top = "60vh";
      } else {
         document.getElementById("navbar").style.top = "-200px";
         document.getElementById("blur").style.top = "-200px";
      }
      prevScrollpos = currentScrollPos;
   };

   useGSAP(
      () => {
         gsap.from("#logo,li,.gradient-blur", {
            ease: "Expo.easeOut", // <- NavBar Animation
            opacity: 0,
            y: -200,
            delay: 0.5,
            duration: 1.5,
            stagger: 0.2,
         });
      },
      { scope: "#navbar" }
   );

   return (
      <nav id="navbar">
         <div id="blur" className="gradient-blur">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
         </div>
         <main className="navbar-items-container">
            <Link id="logo" to="/" aria-label="Home">
               <img className="navbar_logo" src="V-2.png" alt="logo" />
            </Link>
            <ul>
               <Link to="/work" aria-label="Contact">
                  <li>Contact</li>
               </Link>
               <Link to="/team" aria-label="Team">
                  <li>Team</li>
               </Link>
            </ul>
         </main>
      </nav>
   );
}
