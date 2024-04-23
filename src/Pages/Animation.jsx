import { Link } from "react-router-dom";
import React from "react";
import video from "../assets/vid/banners/Banner Home ANIMACION.mp4";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
const Animation = () => {
   useGSAP(
      () => {
         gsap.from(".work_title", {
            opacity: 0,
            y: 100,
         });
         gsap.from(".subtitle", {
            delay: 0.1,
            opacity: 0,
            y: 100,
         });

         gsap.from("#work1, #work2", {
            delay: 0.2,
            opacity: 0,
            y: 100,
         });
         gsap.from("#work3, #work4", {
            scrollTrigger: {
               trigger: "#work3",
               start: "top bottom",
               end: "top 90%",
               scrub: 1,
            },
            opacity: 0,
            y: 100,
         });
      },
      { scope: ".work_container" }
   );

   return (
      <section className="page_section">
         <div className="work_container">
            <video
               id="Animation_title"
               autoPlay
               muted
               loop
               src={video}
               className="banner_Animation"></video>

            <h1 className="work_title">Animation</h1>
            <h1 className="work_title work_title_stroke">Animation</h1>

            <p className="subtitle">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
               dolorem.
            </p>

            <div className="work_grid">
               <div id="work1" className="img_container">
                  <img src="../public/work1.jpg" alt="" />
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Officiis, dolorem.
                  </p>
               </div>
               <div id="work2" className="img_container">
                  <img src="../public/work2.jpg" alt="" />
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Officiis, dolorem.
                  </p>
               </div>
               <div id="work3" className="img_container">
                  <img src="../public/work3.jpg" alt="" />
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Officiis, dolorem.
                  </p>
               </div>
               <div id="work4" className="img_container">
                  <img src="../public/work4.jpg" alt="" />
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Officiis, dolorem.
                  </p>
               </div>
            </div>
            {/* <Link className="link" to={`/work/${work.work}`}>
         Video
      </Link> */}
         </div>
      </section>
   );
};

export default Animation;
