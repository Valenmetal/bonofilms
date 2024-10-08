import React from "react"
import { gsap } from "gsap"
import { Link } from "react-router-dom"
import { useGSAP } from "@gsap/react"
import { LogoEmail } from "../assets/Icons"
import { useRef } from "react"

export default function Navbar() {
   var prevScrollpos = window.scrollY
   window.onscroll = function () {
      var currentScrollPos = window.scrollY
      if (prevScrollpos > currentScrollPos) {
         document.getElementById("navbar").style.top = "0"
      } else {
         document.getElementById("navbar").style.top = "-200px"
      }
      prevScrollpos = currentScrollPos
   }
   const navbar = useRef()
   useGSAP(
      () => {
         gsap.from("#logo,.navbar-li-container", {
            ease: "Expo.easeOut", // <- NavBar Animation
            opacity: 0,
            y: -200,
            delay: 4.5,
            duration: 1.5,
            stagger: 0.2,
         })
      },
      { scope: navbar }
   )

   return (
      <nav ref={navbar} id="navbar">
         <main className="navbar-items-container">
            <Link id="logo" to="/" aria-label="Home">
               <img className="navbar_logo" src="/logo-bono.png" alt="logo" />
            </Link>
            <ul>
               <Link to="https://wa.me/5491126512436" aria-label="Contact">
                  <div className="navbar-li-container">
                     <li>Contact</li>
                     <LogoEmail />
                  </div>
               </Link>
            </ul>
         </main>
      </nav>
   )
}
