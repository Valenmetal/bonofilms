// src/TextCarousel.js
import React, { useState, useEffect } from "react";
import { LogoUpWork } from "../assets/Icons";
import Estrella from "../components/Estrella";

const TextCarousel = ({ texts, interval = 3000 }) => {
   const [currentIndex, setCurrentIndex] = useState(0);

   useEffect(() => {
      const timer = setInterval(() => {
         setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, interval);

      return () => clearInterval(timer);
   }, [texts.length, interval]);

   return (
      <div className="carousel-container">
         <p className="carousel-text">{texts[currentIndex]}</p>
         <div className="upwork_container">
            <a
               className="upwork_logo"
               target="_blank"
               href="https://www.upwork.com/freelancers/bonof">
               <LogoUpWork />
            </a>
            <div>
               <Estrella />
               <Estrella />
               <Estrella />
               <Estrella />
               <Estrella />
            </div>
         </div>
         <div className="carousel-controls">
            {texts.map((_, index) => (
               <button
                  key={index}
                  className={`carousel-control ${
                     index === currentIndex ? "active" : ""
                  }`}
                  onClick={() => setCurrentIndex(index)}
               />
            ))}
         </div>
      </div>
   );
};

export default TextCarousel;
