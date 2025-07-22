import React, { useEffect, useRef } from "react";

export const Estrella = () => {
   const sparkleContainerRef = useRef(null);

   useEffect(() => {
      const sparkleContainer = sparkleContainerRef.current;

      function createSparkle() {
         const sparkle = document.createElement("div");
         sparkle.classList.add("sparkle");

         // Posición aleatoria dentro del contenedor
         const x = Math.random() * sparkleContainer.clientWidth;
         const y = Math.random() * sparkleContainer.clientHeight;

         sparkle.style.left = `${x}px`;
         sparkle.style.top = `${y}px`;

         sparkleContainer.appendChild(sparkle);

         // Remover el brillo después de un tiempo
         setTimeout(() => {
            sparkle.remove();
         }, 1000);
      }

      // Crear brillos a intervalos regulares
      const interval = setInterval(createSparkle, 300);

      // Limpiar intervalo al desmontar el componente
      return () => clearInterval(interval);
   }, []);

   return (
      <div className="estrellita-container">
         <svg
            className="estrellita"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 256 256">
            <path
               fill="currentColor"
               d="m234.29 114.85l-45 38.83L203 211.75a16.4 16.4 0 0 1-24.5 17.82L128 198.49l-50.53 31.08A16.4 16.4 0 0 1 53 211.75l13.76-58.07l-45-38.83A16.46 16.46 0 0 1 31.08 86l59-4.76l22.76-55.08a16.36 16.36 0 0 1 30.27 0l22.75 55.08l59 4.76a16.46 16.46 0 0 1 9.37 28.86Z"
            />
         </svg>
         <div className="sparkle-container" ref={sparkleContainerRef}></div>
      </div>
   );
};

export default Estrella;
