import React, { forwardRef, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

// Simple cn utility
function cn(...classes) {
   return classes.filter(Boolean).join(" ")
}

// Helper to strip HTML tags for plain text animations
const stripHtml = (html) => {
   if (typeof window === "undefined") return html
   const doc = new DOMParser().parseFromString(html, "text/html")
   return doc.body.textContent || ""
}

const TypographyReveal = forwardRef(
   (
      {
         children,
         className,
         revealType = "word",
         animationType = "fadeInUp",
         fromDirection = "bottom",
         mutedColor = "#94a3b8",
         duration = 0.2,
         stagger = 0.02,
         start = "top 85%",
         end = "bottom 50%",
         ease = "power3.out",
         delay = 0,
         as: Component = "p",
         markers = false,
         useScrollTrigger = true,
         ...props
      },
      ref,
   ) => {
      const containerRef = useRef(null)
      const rawText = typeof children === "string" ? children : ""
      const textToRender =
         rawText.includes("<") && rawText.includes(">")
            ? stripHtml(rawText)
            : rawText

      useGSAP(
         () => {
            const targets = {
               word: ".reveal-word",
               line: ".reveal-line",
               character: ".reveal-character",
            }[revealType]

            const elements = gsap.utils.toArray(targets, containerRef.current)
            if (elements.length === 0) return

            // Kill any running tweens on these elements
            gsap.killTweensOf(elements)

            if (animationType === "colorizeIn") {
               gsap.set(elements, { color: mutedColor })
               gsap.to(elements, {
                  color: "inherit",
                  stagger: stagger,
                  ease: "none",
                  delay: delay,
                  scrollTrigger: {
                     trigger: containerRef.current,
                     start: start,
                     end: end,
                     scrub: true,
                     markers: markers,
                  },
               })
               return
            }

            // Set initial hidden state for all elements
            const initialVars = { opacity: 0 }
            const animationVars = {
               opacity: 1,
               duration,
               ease,
               stagger,
               delay,
            }

            if (useScrollTrigger) {
               animationVars.scrollTrigger = {
                  trigger: containerRef.current,
                  start: start,
                  end: end,
                  toggleActions: "play none none none",
                  markers: markers,
               }
            }

            switch (animationType) {
               case "blurIn":
                  initialVars.filter = "blur(8px)"
                  animationVars.filter = "blur(0px)"
                  duration = 2
                  break
               case "flipIn":
                  initialVars.rotateX = -90
                  initialVars.y = 20
                  animationVars.rotateX = 0
                  animationVars.y = 0
                  break
               case "fadeInUp":
               default:
                  if (fromDirection === "left" || fromDirection === "right") {
                     initialVars.x = fromDirection === "left" ? -20 : 20
                     animationVars.x = 0
                  } else {
                     initialVars.y = fromDirection === "top" ? -20 : 20
                     animationVars.y = 0
                  }
                  break
            }

            gsap.set(elements, initialVars)
            gsap.to(elements, animationVars)
         },
         {
            scope: containerRef,
            dependencies: [
               textToRender,
               revealType,
               animationType,
               fromDirection,
               start,
               end,
               delay,
               markers,
               useScrollTrigger,
            ],
         },
      )

      const getPreAnimationClasses = () => {
         if (animationType === "colorizeIn") return ""
         return "opacity-0"
      }

      const renderContent = () => {
         const preAnimationClasses = getPreAnimationClasses()
         const unitClass = `inline-block ${preAnimationClasses}`
         const lineUnitClass = `block ${preAnimationClasses}`

         switch (revealType) {
            case "character": {
               const words = textToRender.split(" ")
               return words.map((word, wordIndex) => (
                  <span key={wordIndex} className="inline-block whitespace-nowrap">
                     {word.split("").map((char, i) => (
                        <span
                           key={i}
                           className={cn(
                              "inline-block align-bottom",
                              animationType !== "colorizeIn" &&
                                 animationType !== "fadeInUp" &&
                                 "overflow-hidden",
                           )}
                           style={{ lineHeight: "1.4" }}>
                           <span
                              className={`reveal-character ${unitClass}`}
                              style={
                                 animationType === "flipIn"
                                    ? {
                                         transformOrigin: "bottom center",
                                         transform: "rotateX(-90deg)",
                                         display: "inline-block",
                                      }
                                    : { display: "inline-block" }
                              }>
                              {char}
                           </span>
                        </span>
                     ))}
                     {wordIndex < words.length - 1 && (
                        <span
                           className={cn(
                              "inline-block align-bottom",
                              animationType !== "colorizeIn" &&
                                 animationType !== "fadeInUp" &&
                                 "overflow-hidden",
                           )}
                           style={{ lineHeight: "1.4" }}>
                           <span
                              className={`reveal-character ${unitClass}`}
                              style={
                                 animationType === "flipIn"
                                    ? {
                                         transformOrigin: "bottom center",
                                         transform: "rotateX(-90deg)",
                                         display: "inline-block",
                                      }
                                    : { display: "inline-block" }
                              }>
                              {"\u00A0"}
                           </span>
                        </span>
                     )}
                  </span>
               ))
            }
            case "line":
               return textToRender.split("\n").map((line, i) => (
                  <span
                     key={i}
                     className={cn(
                        "block",
                        animationType !== "colorizeIn" && "overflow-hidden",
                     )}>
                     <span className={`reveal-line ${lineUnitClass}`}>
                        {line.trim() === "" ? "\u00A0" : line}
                     </span>
                  </span>
               ))
            case "word":
            default:
               return textToRender.split(" ").map((word, i, arr) => (
                  <span key={i}>
                     <span
                        className={cn(
                           "inline-block",
                           animationType !== "colorizeIn" && "overflow-hidden",
                        )}>
                        <span className={`reveal-word ${unitClass}`}>{word}</span>
                     </span>
                     {i < arr.length - 1 && "\u00A0"}
                  </span>
               ))
         }
      }

      return (
         <Component
            ref={(el) => {
               containerRef.current = el
               if (typeof ref === "function") ref(el)
               else if (ref) ref.current = el
            }}
            className={cn(
               animationType === "flipIn" && "[perspective:800px]",
               className,
            )}
            {...props}
            aria-label={textToRender}>
            {renderContent()}
         </Component>
      )
   },
)
TypographyReveal.displayName = "TypographyReveal"

export default TypographyReveal
