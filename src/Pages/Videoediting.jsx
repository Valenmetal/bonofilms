import video from "../assets/vid/banners/Banner Home VIDEOEDITING.mp4";
import AndreCassiano from "/AndreCassiano.mp4";
import Fandelier from "/Fandelier.mp4";
import Interview_Tacoma_Farmers from "/Interview_Tacoma_Farmers.mp4";
import MADA_1 from "/MADA_1.mp4";
import MADA_2 from "/MADA_2.mp4";
import MADA_3 from "/MADA_3.mp4";
import Max_Drifting from "/Max_Drifting.mp4";
import Mercy from "/Mercy.mp4";
import Olive_Group from "/Olive_Group.mp4";
import PanchoVertical from "/PanchoVertical.mp4";
import Pancho from "/Pancho.mp4";
import Sprague from "/Sprague.mp4";
import Tacoma_Farmers from "/Tacoma_Farmers.mp4";
import Tapps_Electrics from "/Tapps_Electrics.mp4";
import Zee from "/Zee.mp4";
import ZOOM_TRB from "/ZOOM_TRB.mp4";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import mini_Filmmaking from "../assets/vid/mini/Miniatura_FILMMAKING.mp4";
import mini_Animation from "../assets/vid/mini/Miniatura_ANIMACION.mp4";
import mini_Colorgrading from "../assets/vid/mini/Miniatura_COLORGRADING.mp4";
import Carrousel from "../components/Carrousel";
import { ExternalLogo } from "../assets/Icons";
const Videoediting = () => {
   const work_container = useRef();
   const pojects_menu_grid = useRef();
   useEffect(() => {
      const handlePointerMove = (e) => {
         e.target.setAttribute("controls", true);
      };

      const handlePointerOut = (e) => {
         e.target.removeAttribute("controls");
      };

      const videoElements = document.querySelectorAll("#videoediting_video");
      videoElements.forEach((video) => {
         video.addEventListener("pointermove", handlePointerMove);
         video.addEventListener("pointerout", handlePointerOut);
      });

      return () => {
         videoElements.forEach((video) => {
            video.removeEventListener("pointermove", handlePointerMove);
            video.removeEventListener("pointerout", handlePointerOut);
         });
      };
   }, []);
   useGSAP(
      () => {
         gsap.from(".work_title", {
            opacity: 0,
            y: 100,
         });
      },
      { scope: work_container }
   );

   useGSAP(
      () => {
         gsap.to(".pojects_menu_item_fill", {
            scrollTrigger: {
               trigger: "#animation_menu",
               start: "-75% center",
               duration: 0.1,
            },
            width: "100%",
         });
         gsap.to(".pojects_menu_item_fill", {
            scrollTrigger: {
               trigger: "#animation_menu",
               start: "-75% center",
            },
            autoAlpha: 0,
            delay: 0.4,
         });
         gsap.to("#ghost", {
            scrollTrigger: {
               trigger: "#animation_menu",
               start: "-75% center",
            },
            color: "rgba(175, 182, 223)",
            borderBottomWidth: "2px",
            delay: 1,
         });

         gsap.from("#filmmaking_menu", {
            scrollTrigger: {
               trigger: "#filmmaking_menu",
               start: "top bottom",
               end: "top 90%",
               scrub: 1,
            },
            opacity: 0,
            y: 100,
         });

         gsap.from("#animation_menu", {
            scrollTrigger: {
               trigger: "#animation_menu",
               start: "top bottom",
               end: "top 90%",
               scrub: 1,
            },
            opacity: 0,
            y: 100,
         });
         gsap.from("#colorgrading_menu", {
            scrollTrigger: {
               trigger: "#colorgrading_menu",
               start: "top bottom",
               end: "top 90%",
               scrub: 1,
            },
            opacity: 0,
            y: 100,
         });

         {
            let film = document.querySelector("#filmmaking_menu");
            let tl_filmmaking = gsap.timeline({ paused: true });

            tl_filmmaking.to("#filmmaking_mini", {
               duration: 0.5,
               display: "block",
               width: "100%",
            });

            film.addEventListener("mouseenter", () =>
               tl_filmmaking.timeScale(1).play()
            );
            film.addEventListener("mouseleave", () =>
               tl_filmmaking.timeScale(1.5).reverse()
            );

            let animation = document.querySelector("#animation_menu");
            let tl_animation = gsap.timeline({ paused: true });

            tl_animation.to("#animation_mini", {
               duration: 0.5,
               display: "block",
               width: "100%",
            });
            animation.addEventListener("mouseenter", () =>
               tl_animation.timeScale(1).play()
            );
            animation.addEventListener("mouseleave", () =>
               tl_animation.timeScale(1.5).reverse()
            );

            let colorgrading = document.querySelector("#colorgrading_menu");
            let tl_colorgrading = gsap.timeline({ paused: true });

            tl_colorgrading.to("#colorgrading_mini", {
               duration: 0.5,
               display: "block",
               width: "100%",
            });
            colorgrading.addEventListener("mouseenter", () =>
               tl_colorgrading.timeScale(1).play()
            );
            colorgrading.addEventListener("mouseleave", () =>
               tl_colorgrading.timeScale(1.5).reverse()
            );
         }
      },
      { scope: pojects_menu_grid }
   );

   const texts = [
      '"Alan, is an exceptional video producer. Not just an editor, but a creative director. We will definitely work with him if we have a project in the future in video."',
      '"Was able to stick through the project and make changes on the fly."',
      '"Great job, thank you for the good work!"',
      '"Complete professional that I recommend, delivering every detail of my perfectionist screenplay and responded to suggestions for revisions without a hitch."',
      '"Great skills in action fast-paced editing, track and scene sync, VFX effects and 2D animation."',
      '"Did a really really good edit job. We struggled at first with the colour grading but the issue was fixed. Thank you"',
      '"Great work! did precisely what was asked in a timely fashion and with great quality!"',
      '"Bono Films did a great job delivering what I asked for. Will work with again in the future."',
   ];

   return (
      <section className="page_section">
         <div ref={work_container} className="work_container">
            <video
               autoPlay
               muted
               loop
               src={video}
               className="banner_videoediting"></video>
            <h1 id="Videoediting_title" className="work_title">
               Videoediting
            </h1>
            <h1 className="work_title work_title_stroke">Videoediting</h1>

            <div className="work_grid">
               <div className="wraper">
                  <div id="work1" className="img_container">
                     <Link
                        className="external-logo"
                        to={`/videoediting/AndreCassiano`}>
                        <ExternalLogo />
                     </Link>
                     <video
                        muted
                        loop
                        id="videoediting_video"
                        src={AndreCassiano}></video>
                  </div>
                  <div id="work2" className="img_container">
                     <Link className="external-logo" to={`/videoediting/Fandelier`}>
                        <ExternalLogo />
                     </Link>
                     <video
                        muted
                        loop
                        id="videoediting_video"
                        src={Fandelier}></video>
                  </div>
               </div>
               <div className="wraper">
                  <div id="work3" className="img_container">
                     <Link
                        className="external-logo"
                        to={`/videoediting/Interview_Tacoma_Farmers`}>
                        <ExternalLogo />
                     </Link>
                     <video
                        muted
                        loop
                        id="videoediting_video"
                        src={Interview_Tacoma_Farmers}></video>
                  </div>
                  <div id="work4" className="vertical_video">
                     <Link className="external-logo" to={`/videoediting/MADA_1`}>
                        <ExternalLogo />
                     </Link>
                     <video muted loop id="videoediting_video" src={MADA_1}></video>
                  </div>
               </div>
               <div className="wraper">
                  <div id="work5" className="img_container">
                     <Link className="external-logo" to={`/videoediting/MADA_2`}>
                        <ExternalLogo />
                     </Link>
                     <video muted loop id="videoediting_video" src={MADA_2}></video>
                  </div>
                  <div id="work6" className="vertical_video">
                     <Link className="external-logo" to={`/videoediting/MADA_3`}>
                        <ExternalLogo />
                     </Link>
                     <video muted loop id="videoediting_video" src={MADA_3}></video>
                  </div>
               </div>
               <div className="wraper">
                  <div id="work7" className="img_container">
                     <Link
                        className="external-logo"
                        to={`/videoediting/Max_Drifting`}>
                        <ExternalLogo />
                     </Link>
                     <video
                        muted
                        loop
                        id="videoediting_video"
                        src={Max_Drifting}></video>
                  </div>
                  <div id="work8" className="img_container">
                     <Link className="external-logo" to={`/videoediting/Mercy`}>
                        <ExternalLogo />
                     </Link>
                     <video muted loop id="videoediting_video" src={Mercy}></video>
                  </div>
               </div>
               <div className="wraper">
                  <div id="work9" className="img_container">
                     <Link
                        className="external-logo"
                        to={`/videoediting/Olive_Group`}>
                        <ExternalLogo />
                     </Link>
                     <video
                        muted
                        loop
                        id="videoediting_video"
                        src={Olive_Group}></video>
                  </div>
                  <div id="work10" className="vertical_video">
                     <Link
                        className="external-logo"
                        to={`/videoediting/PanchoVertical`}>
                        <ExternalLogo />
                     </Link>
                     <video
                        muted
                        loop
                        id="videoediting_video"
                        src={PanchoVertical}></video>
                  </div>
               </div>
               <div className="wraper">
                  <div id="work11" className="img_container">
                     <Link className="external-logo" to={`/videoediting/Pancho`}>
                        <ExternalLogo />
                     </Link>
                     <video muted loop id="videoediting_video" src={Pancho}></video>
                  </div>

                  <div id="work12" className="img_container">
                     <Link className="external-logo" to={`/videoediting/Sprague`}>
                        <ExternalLogo />
                     </Link>
                     <video muted loop id="videoediting_video" src={Sprague}></video>
                  </div>
               </div>
               <div className="wraper">
                  <Link
                     className="external-logo"
                     to={`/videoediting/Tacoma_Farmers`}>
                     <ExternalLogo />
                  </Link>
                  <div id="work13" className="img_container">
                     <video
                        muted
                        loop
                        id="videoediting_video"
                        src={Tacoma_Farmers}></video>
                  </div>
                  <div id="work14" className="img_container">
                     <Link
                        className="external-logo"
                        to={`/videoediting/Tapps_Electrics`}>
                        <ExternalLogo />
                     </Link>
                     <video
                        muted
                        loop
                        id="videoediting_video"
                        src={Tapps_Electrics}></video>
                  </div>
               </div>
               <div className="wraper">
                  <div id="work15" className="vertical_video">
                     <Link className="external-logo" to={`/videoediting/Zee`}>
                        <ExternalLogo />
                     </Link>
                     <video muted loop id="videoediting_video" src={Zee}></video>
                  </div>
                  <div id="work16" className="img_container">
                     <Link className="external-logo" to={`/videoediting/ZOOM_TRB`}>
                        <ExternalLogo />
                     </Link>
                     <video
                        muted
                        loop
                        id="videoediting_video"
                        src={ZOOM_TRB}></video>
                  </div>
               </div>
            </div>
            <Carrousel texts={texts} interval={3000} />
         </div>

         <section className="pojects_menu_section">
            <div ref={pojects_menu_grid} className="pojects_menu_grid">
               <div id="filmmaking_menu" className="pojects_menu_item">
                  <Link className="link" to="/filmmaking">
                     <span className="pojects_menu_item_fill">Filmmaking</span>
                     <span id="ghost">Film</span>
                     <video
                        autoPlay
                        muted
                        loop
                        id="filmmaking_mini"
                        className="poject_mini"
                        src={mini_Filmmaking}></video>
                     <span id="ghost">making</span>
                  </Link>
               </div>
               <div id="animation_menu" className="pojects_menu_item">
                  <Link className="link" to="/animation">
                     <span className="pojects_menu_item_fill">Animation</span>
                     <span id="ghost">Animation</span>
                     <video
                        autoPlay
                        muted
                        loop
                        id="animation_mini"
                        className="poject_mini"
                        src={mini_Animation}></video>
                  </Link>
               </div>
               <div id="colorgrading_menu" className="pojects_menu_item">
                  <Link className="link" to="/colorgrading">
                     <span className="pojects_menu_item_fill">Colorgrading</span>
                     <span id="ghost">Colorgrading</span>
                     <video
                        autoPlay
                        muted
                        loop
                        id="colorgrading_mini"
                        className="poject_mini"
                        src={mini_Colorgrading}></video>
                  </Link>
               </div>
            </div>
         </section>
      </section>
   );
};

export default Videoediting;
