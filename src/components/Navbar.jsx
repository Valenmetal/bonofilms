import { React, useState, useEffect } from "react"
import { gsap } from "gsap"
import AnimatedLink from "./AnimatedLink"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import { useTeamScroll } from "./TeamScrollContext"
import SocialsButton from "./Socials"
import ContactButton from "./Contact"

export default function Navbar() {
   const [isOpen, setIsOpen] = useState(false)
   const { scrollToTeam } = useTeamScroll()
   const navbar = useRef()

   const toggleMenu = () => setIsOpen(!isOpen)

   useGSAP(() => {
      gsap.from(".navbar_logo,.hamburger,#li-1,#li-2,#li-3", {
         ease: "Expo.easeOut",
         opacity: 0,
         y: -200,
         delay: 6.5,
         duration: 1.5,
         stagger: 0.3,
      })
   }, { scope: navbar })

   useEffect(() => {
      let prevScrollpos = window.scrollY
      const onScroll = () => {
         const currentScrollPos = window.scrollY
         document.getElementById("navbar").style.top =
            prevScrollpos > currentScrollPos ? "0" : "-300px"
         prevScrollpos = currentScrollPos
      }

      window.addEventListener("scroll", onScroll)
      return () => window.removeEventListener("scroll", onScroll)
   }, [])

   return (
      <nav ref={navbar} id="navbar">
         <main className="navbar-items-container">
            <AnimatedLink id="logo" to="/" aria-label="Home">
               <img className="navbar_logo" src="/logo-bono.png" alt="logo" />
            </AnimatedLink>
            <button className="hamburger" onClick={toggleMenu}>
               <div className={`bar ${isOpen ? "open" : ""}`} />
               <div className={`bar ${isOpen ? "open" : ""}`} />
               <div className={`bar ${isOpen ? "open" : ""}`} />
            </button>
            <ul className={`navbar-li-container ${isOpen ? "active" : ""}`}>
               <li id='li-1'><button onClick={() => { scrollToTeam(); setIsOpen(false) }}>Team</button></li>
               <li id='li-2'><SocialsButton /></li>
               <li id='li-3'><ContactButton /></li>
            </ul>
         </main>
      </nav>
   )
}
