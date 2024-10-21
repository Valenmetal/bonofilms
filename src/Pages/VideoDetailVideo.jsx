import React, { useState } from "react"
import AndreCassiano from "/AndreCassiano.mp4"
import Fandelier from "/Fandelier.mp4"
import Interview_Tacoma_Farmers from "/Interview_Tacoma_Farmers.mp4"
import MADA_1 from "/MADA_1.mp4"
// import MADA_2 from "/MADA_2.mp4"
import MADA_3 from "/MADA_3.mp4"
import Max_Drifting from "/Max_Drifting.mp4"
import Mercy from "/Mercy.mp4"
import Olive_Group from "/Olive_Group.mp4"
import PanchoVertical from "/PanchoVertical.mp4"
import Pancho from "/Pancho.mp4"
import Sprague from "/Sprague.mp4"
import Tacoma_Farmers from "/Tacoma_Farmers.mp4"
import Tapps_Electrics from "/Tapps_Electrics.mp4"
import Zee from "/Zee.mp4"
import ZOOM_TRB from "/ZOOM_TRB.mp4"
import AveryJason from "/AveryJason.mp4"
import CaitlynThomas from "/CaitlynThomas.mp4"
import ChristinaMatth from "/ChristinaMatth.mp4"
import geishachris from "/geishachris.mp4"
import Jacki from "/Jacki.mp4"
import JessicaNick from "/JessicaNick.mp4"
import Jennifer from "/Jennifer.mp4"
import KatiChris from "/KatiChris.mp4"
import LindsayNick from "/LindsayNick.mp4"
import { useParams, Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"

const VideoDetail = () => {
   const { videoId } = useParams()

   const [isModalOpen, setIsModalOpen] = useState(false)
   const [selectedVideo, setSelectedVideo] = useState("")

   const handleClick = (videoSrc) => {
      setSelectedVideo(videoSrc) // Guarda el video que se va a mostrar en el modal
      setIsModalOpen(true) // Abre el modal
   }

   const closeModal = () => {
      setIsModalOpen(false)
      setSelectedVideo("")
   }
   const handleOutsideClick = (event) => {
      if (event.target.className === "modal") {
         closeModal()
      }
   }

   const renderCarousel = () => {
      switch (videoId) {
         case "wedding":
            return (
               <>
                  <div style={{ width: "99%" }} className="work_grid">
                     <h2 id="wedding" className="carrousel-title_videodetail">
                        Wedding
                     </h2>
                     <Swiper
                        grabCursor={true}
                        navigation={true}
                        spaceBetween={10}
                        breakpoints={{
                           1200: {
                              slidesPerView: 5.1,
                           },
                           522: {
                              slidesPerView: 3.1,
                           },
                           0: {
                              slidesPerView: 2.1,
                           },
                        }}
                        modules={[Navigation]}
                        className="mySwiper">
                        <SwiperSlide>
                           <div onClick={() => handleClick(AveryJason)}>
                              <video
                                 className="mySwiper"
                                 style={{ pointerEvents: "none" }}
                                 autoPlay
                                 muted
                                 loop
                                 id="videoediting_video"
                                 src={AveryJason}></video>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div onClick={() => handleClick(CaitlynThomas)}>
                              <video
                                 className="mySwiper"
                                 style={{ pointerEvents: "none" }}
                                 autoPlay
                                 muted
                                 loop
                                 id="videoediting_video"
                                 src={CaitlynThomas}></video>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div onClick={() => handleClick(ChristinaMatth)}>
                              <video
                                 className="mySwiper"
                                 style={{ pointerEvents: "none" }}
                                 autoPlay
                                 muted
                                 loop
                                 id="videoediting_video"
                                 src={ChristinaMatth}></video>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div onClick={() => handleClick(geishachris)}>
                              <video
                                 className="mySwiper"
                                 style={{ pointerEvents: "none" }}
                                 autoPlay
                                 muted
                                 loop
                                 id="videoediting_video"
                                 src={geishachris}></video>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div onClick={() => handleClick(Jacki)}>
                              <video
                                 className="mySwiper"
                                 style={{ pointerEvents: "none" }}
                                 autoPlay
                                 muted
                                 loop
                                 id="videoediting_video"
                                 src={Jacki}></video>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div onClick={() => handleClick(Jennifer)}>
                              <video
                                 className="mySwiper"
                                 style={{ pointerEvents: "none" }}
                                 autoPlay
                                 muted
                                 loop
                                 id="videoediting_video"
                                 src={Jennifer}></video>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div onClick={() => handleClick(JessicaNick)}>
                              <video
                                 className="mySwiper"
                                 style={{ pointerEvents: "none" }}
                                 autoPlay
                                 muted
                                 loop
                                 id="videoediting_video"
                                 src={JessicaNick}></video>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div onClick={() => handleClick(KatiChris)}>
                              <video
                                 className="mySwiper"
                                 style={{ pointerEvents: "none" }}
                                 autoPlay
                                 muted
                                 loop
                                 id="videoediting_video"
                                 src={KatiChris}></video>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div onClick={() => handleClick(LindsayNick)}>
                              <video
                                 className="mySwiper"
                                 style={{ pointerEvents: "none" }}
                                 autoPlay
                                 muted
                                 loop
                                 id="videoediting_video"
                                 src={LindsayNick}></video>
                           </div>
                        </SwiperSlide>
                     </Swiper>
                  </div>
               </>
            )
         case "docummentary":
            return (
               <>
                  <div style={{ width: "99%" }} className="work_grid">
                     <h2 id="docummentary" className="carrousel-title_videodetail">
                        Docummentary
                     </h2>
                     <Swiper
                        grabCursor={true}
                        navigation={true}
                        breakpoints={{
                           768: {
                              slidesPerView: 1.5,
                           },
                           0: {
                              slidesPerView: 1.1,
                           },
                        }}
                        spaceBetween={10}
                        loop={true}
                        modules={[Navigation]}>
                        <SwiperSlide>
                           <div
                              onClick={() => handleClick(Interview_Tacoma_Farmers)}>
                              <video
                                 style={{ pointerEvents: "none" }}
                                 autoPlay
                                 muted
                                 loop
                                 id="videoediting_video"
                                 src={Interview_Tacoma_Farmers}></video>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div onClick={() => handleClick(Tacoma_Farmers)}>
                              <video
                                 style={{ pointerEvents: "none" }}
                                 autoPlay
                                 muted
                                 loop
                                 id="videoediting_video"
                                 src={Tacoma_Farmers}></video>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div onClick={() => handleClick(AndreCassiano)}>
                              <video
                                 style={{ pointerEvents: "none" }}
                                 autoPlay
                                 muted
                                 loop
                                 id="videoediting_video"
                                 src={AndreCassiano}></video>
                           </div>
                        </SwiperSlide>
                     </Swiper>
                  </div>
               </>
            )
         case "socialmedia":
            return (
               <>
                  <div style={{ width: "99%" }} className="work_grid">
                     <h2 id="socialmedia" className="carrousel-title_videodetail">
                        Social Media
                     </h2>
                     <div className="social-media-vert-container">
                        <div onClick={() => handleClick(Zee)}>
                           <video
                              className="mySwiper"
                              style={{ pointerEvents: "none" }}
                              autoPlay
                              muted
                              loop
                              id="videoediting_video"
                              src={Zee}></video>
                        </div>
                        <div onClick={() => handleClick(PanchoVertical)}>
                           <video
                              className="mySwiper"
                              style={{ pointerEvents: "none" }}
                              autoPlay
                              muted
                              loop
                              id="videoediting_video"
                              src={PanchoVertical}></video>
                        </div>
                     </div>
                     <Swiper
                        grabCursor={true}
                        navigation={true}
                        breakpoints={{
                           768: {
                              slidesPerView: 2.9,
                           },
                           522: {
                              slidesPerView: 2.1,
                           },
                           0: {
                              slidesPerView: 1.5,
                           },
                        }}
                        spaceBetween={10}
                        // loop={true}

                        modules={[Navigation]}
                        className="mySwiper">
                        <SwiperSlide>
                           <div onClick={() => handleClick(MADA_1)}>
                              <video
                                 className="mySwiper"
                                 style={{ pointerEvents: "none" }}
                                 autoPlay
                                 muted
                                 loop
                                 id="videoediting_video"
                                 src={MADA_1}></video>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div onClick={() => handleClick(Fandelier)}>
                              <video
                                 className="mySwiper"
                                 style={{ pointerEvents: "none" }}
                                 autoPlay
                                 muted
                                 loop
                                 id="videoediting_video"
                                 src={Fandelier}></video>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div onClick={() => handleClick(MADA_3)}>
                              <video
                                 className="mySwiper"
                                 style={{ pointerEvents: "none" }}
                                 autoPlay
                                 muted
                                 loop
                                 id="videoediting_video"
                                 src={MADA_3}></video>
                           </div>
                        </SwiperSlide>
                     </Swiper>
                  </div>
               </>
            )
         case "commercial":
            return (
               <>
                  <div style={{ width: "99%" }} className="work_grid">
                     <h2 id="Commercial" className="carrousel-title_videodetail">
                        Commercial
                     </h2>
                     <Swiper
                        grabCursor={true}
                        navigation={true}
                        loop={true}
                        breakpoints={{
                           768: {
                              slidesPerView: 1.5,
                           },
                           0: {
                              slidesPerView: 1.1,
                           },
                        }}
                        spaceBetween={10}
                        modules={[Navigation]}>
                        <SwiperSlide>
                           <div onClick={() => handleClick(Tapps_Electrics)}>
                              <video
                                 style={{ pointerEvents: "none" }}
                                 autoPlay
                                 muted
                                 loop
                                 id="videoediting_video"
                                 src={Tapps_Electrics}></video>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div onClick={() => handleClick(Mercy)}>
                              <video
                                 style={{ pointerEvents: "none" }}
                                 autoPlay
                                 muted
                                 loop
                                 id="videoediting_video"
                                 src={Mercy}></video>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div onClick={() => handleClick(Max_Drifting)}>
                              <video
                                 style={{ pointerEvents: "none" }}
                                 autoPlay
                                 muted
                                 loop
                                 id="videoediting_video"
                                 src={Max_Drifting}></video>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div onClick={() => handleClick(Pancho)}>
                              <video
                                 style={{ pointerEvents: "none" }}
                                 autoPlay
                                 muted
                                 loop
                                 id="videoediting_video"
                                 src={Pancho}></video>
                           </div>
                        </SwiperSlide>
                     </Swiper>
                  </div>
               </>
            )
         case "corporate":
            return (
               <>
                  <div style={{ width: "99%" }} className="work_grid">
                     <h2 id="corporate" className="carrousel-title_videodetail">
                        Corporate
                     </h2>
                     <Swiper
                        grabCursor={true}
                        navigation={true}
                        loop={true}
                        breakpoints={{
                           768: {
                              slidesPerView: 1.5,
                           },
                           0: {
                              slidesPerView: 1.1,
                           },
                        }}
                        spaceBetween={10}
                        modules={[Navigation]}>
                        <SwiperSlide>
                           <div onClick={() => handleClick(Sprague)}>
                              <video
                                 style={{ pointerEvents: "none" }}
                                 autoPlay
                                 muted
                                 loop
                                 id="videoediting_video"
                                 src={Sprague}></video>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div onClick={() => handleClick(ZOOM_TRB)}>
                              <video
                                 style={{ pointerEvents: "none" }}
                                 autoPlay
                                 muted
                                 loop
                                 id="videoediting_video"
                                 src={ZOOM_TRB}></video>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div onClick={() => handleClick(Olive_Group)}>
                              <video
                                 style={{ pointerEvents: "none" }}
                                 autoPlay
                                 muted
                                 loop
                                 id="videoediting_video"
                                 src={Olive_Group}></video>
                           </div>
                        </SwiperSlide>
                     </Swiper>
                  </div>
               </>
            )
         case "youtube":
            return (
               <>
                  <div style={{ width: "99%" }} className="work_grid">
                     <h2 id="youtube" className="carrousel-title_videodetail">
                        Youtube
                     </h2>
                     <Swiper
                        grabCursor={true}
                        navigation={true}
                        breakpoints={{
                           768: {
                              slidesPerView: 1.5,
                           },
                           0: {
                              slidesPerView: 1.1,
                           },
                        }}
                        spaceBetween={10}
                        loop={true}
                        modules={[Navigation]}>
                        <SwiperSlide>
                           <iframe
                              className="iframe-carrousel"
                              src="https://www.youtube.com/embed/WMASl9qsoRE"
                              title="Talent Cards LMS 2024: Comprehensive Review &amp; Tutorial"
                              allow="autoplay"
                              autoPlay
                              referrerPolicy="strict-origin-when-cross-origin"
                              allowFullScreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                           <iframe
                              className="iframe-carrousel"
                              src="https://www.youtube.com/embed/m5hGwGN65Ms"
                              title="Ultimate Talent LMS 2024 Review: Features, Pricing, and Setup Guide"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              referrerPolicy="strict-origin-when-cross-origin"
                              allowFullScreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                           <iframe
                              className="iframe-carrousel"
                              src="https://www.youtube.com/embed/qwzHqNJ_KGI"
                              title="How Russia and the USA Would Actually Fight Each Other"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              referrerPolicy="strict-origin-when-cross-origin"
                              allowFullScreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                           <iframe
                              className="iframe-carrousel"
                              src="https://www.youtube.com/embed/MsEXPjgWqOc"
                              title='IT&#39;S ABOUT TO GET CRAZY!!! | Demon Slayer Season 4 Episode 1 Reaction "To Defeat Muzan Kibutsuji"'
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              referrerPolicy="strict-origin-when-cross-origin"
                              allowFullScreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                           <iframe
                              className="iframe-carrousel"
                              src="https://www.youtube.com/embed/uSsW5HHfKFw"
                              title="The Phases of New Construction Home Builds | The Denver Real Estate Agent"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              referrerPolicy="strict-origin-when-cross-origin"
                              allowFullScreen></iframe>
                        </SwiperSlide>
                     </Swiper>
                  </div>
               </>
            )
         default:
            return <p>No video</p>
      }
   }

   return (
      <>
         <div className="video-detail">
            <button className="back-button">
               <Link to={`/videoediting`}>
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="32"
                     height="32"
                     viewBox="0 0 24 24">
                     <path
                        fill="currentColor"
                        d="M17.77 3.77L16 2L6 12l10 10l1.77-1.77L9.54 12z"
                     />
                  </svg>
               </Link>
            </button>
            {renderCarousel()}
            {isModalOpen && (
               <div className="modal" onClick={handleOutsideClick}>
                  <div className="modal-content">
                     <span className="close" onClick={closeModal}>
                        &times;
                     </span>
                     <video
                        style={{ borderRadius: ".5em" }}
                        src={selectedVideo}
                        controls
                        autoPlay></video>
                  </div>
               </div>
            )}
         </div>
      </>
   )
}

export default VideoDetail
