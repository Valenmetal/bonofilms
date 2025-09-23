import React from "react";
import AnimatedLink from '../../components/AnimatedLink';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';


export default function Youtube() {
    return (
        <>
            <div className="category_section">
                <h1 className="carrousel-title_videodetail">
                    Youtube
                </h1>
                <button className="back-button">
                    <AnimatedLink to={`/`}>
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
                    </AnimatedLink>
                </button>
                <h2>eLearning Partners</h2>
                <div className="category_wraper" style={{ flexDirection: 'row' }}>
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
                                src="https://www.youtube.com/embed/dCa3obrXVL8?si=94Ek8ne4rCdCK1Bj"
                                title="How to Create a Video Podcast from Scratch Using Descript AI"
                                allow="autoplay"
                                autoPlay
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <iframe
                                className="iframe-carrousel"
                                src="https://www.youtube.com/embed/WMASl9qsoRE?si=VWgsDT6QNWiLBf_E"
                                title="TalentCards LMS 2024 Review (Everything You Need To Know)"
                                allow="autoplay"
                                autoPlay
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <iframe
                                className="iframe-carrousel"
                                src="https://www.youtube.com/embed/OTRf9oJg_Tc?si=YFvQpusfB5DpQoEz"
                                title="How to build a course in TalentLMS"
                                allow="autoplay"
                                autoPlay
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <iframe
                                className="iframe-carrousel"
                                src="https://www.youtube.com/embed/9b0G8eBmiYU?si=TmxkpRfj5pu2llhg"
                                title="How To Setup Assessments, Quizzes, and Tests in TalentLMS (TalentLMS Tutorial"
                                allow="autoplay"
                                autoPlay
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <iframe
                                className="iframe-carrousel"
                                src="https://www.youtube.com/embed/JoPkTQnTc6A?si=om_9MdUM_el7cZuU"
                                title="How to Use Kajabi to Create and Launch a Podcast from Scratch"
                                allow="autoplay"
                                autoPlay
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <iframe
                                className="iframe-carrousel"
                                src="https://www.youtube.com/embed/Cpm84bV_67A?si=HlQsXzvi4atiG47X"
                                title="Kajabi LMS 2024 Review (Everything You Need To Know)"
                                allow="autoplay"
                                autoPlay
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <iframe
                                className="iframe-carrousel"
                                src="https://www.youtube.com/embed/WY-0qs7lMOA?si=WJ74s8yIMY_UUJkV"
                                title="Is Your Subject-Matter Expertise Still Relevant in the Age of AI?"
                                allow="autoplay"
                                autoPlay
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <iframe
                                className="iframe-carrousel"
                                src="https://www.youtube.com/embed/4k_8qYPCHzI?si=c1_oZiGB2l6gY5AC"
                                title="I Hated AI Until I Did This (How One Shift Turned Fear into a Super-Power)"
                                allow="autoplay"
                                autoPlay
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <h2>Explainer Comics España</h2>
                <div className="category_wraper" style={{ flexDirection: 'row' }}>
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
                                src="https://www.youtube.com/embed/K9UG4f6XQcM?si=uLuclUKFynZeryjT"
                                title="Todos Los Colores De Hulk Explicados En 15 Minutos"
                                allow="autoplay"
                                autoPlay
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <iframe
                                className="iframe-carrousel"
                                src="https://www.youtube.com/embed/78RnQr23IiY?si=Z7Vsl0G4WvnwIqGf"
                                title="Todas Las Variantes Malvadas De Batman Explicadas En 17 minutos"
                                allow="autoplay"
                                autoPlay
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <iframe
                                className="iframe-carrousel"
                                src="https://www.youtube.com/embed/84QRhLmzynM?si=QgfvRwJg8Y4AQVfv"
                                title="Todas Las Clasificaciones De Mutantes Explicadas En 20 Minutos"
                                allow="autoplay"
                                autoPlay
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <iframe
                                className="iframe-carrousel"
                                src="https://www.youtube.com/embed/ukP0pXz02LQ?si=YeUB1Q2W_nJngLSe"
                                title="Todos Los Cuerpos De Linterna Explicados En 13 Minutos"
                                allow="autoplay"
                                autoPlay
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <iframe
                                className="iframe-carrousel"
                                src="https://www.youtube.com/embed/DHH6MW4Zb2k?si=nAoH0HcdGO_NLrob"
                                title="Todas Las Gemas Del Infinito Explicadas En 18 Minutos"
                                allow="autoplay"
                                autoPlay
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <iframe
                                className="iframe-carrousel"
                                src="https://www.youtube.com/embed/dXrEjMy2OGw?si=y785Ywn2uJYqdA7n"
                                title="Todos Los Villanos De Batman Explicados En 20 minutos"
                                allow="autoplay"
                                autoPlay
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <h2>Max AfterBurner</h2>
                <div className="category_wraper" style={{ flexDirection: 'row' }}>
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
                                src="https://www.youtube.com/embed/qwzHqNJ_KGI?si=3Pn84U4I0lq7Iv6f"
                                title="How Russia and the USA Would Actually Fight Each Other"
                                allow="autoplay"
                                autoPlay
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <iframe
                                className="iframe-carrousel"
                                src="https://www.youtube.com/embed/fxEJnvBZ4yE?si=QgIcSyNeg5usPzk1"
                                title="Israel's Iron Dome is More Advanced Than You Think"
                                allow="autoplay"
                                autoPlay
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <iframe
                                className="iframe-carrousel"
                                src="https://www.youtube.com/embed/84QRhLmzynM?si=QgfvRwJg8Y4AQVfv"
                                title="Todas Las Clasificaciones De Mutantes Explicadas En 20 Minutos"
                                allow="autoplay"
                                autoPlay
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <iframe
                                className="iframe-carrousel"
                                src="https://www.youtube.com/embed/aZ57_fvn7IY?si=dW2VRkZDA-xzaGz5"
                                title="The Truth About Nuclear War Between Russia and the USA that No One Mentions"
                                allow="autoplay"
                                autoPlay
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <iframe
                                className="iframe-carrousel"
                                src="https://www.youtube.com/embed/7ZcR2d-gHkM?si=LV-90_z-vV1C2FQY"
                                title="Why is Iran Building It’s Own Fighter Jet?"
                                allow="autoplay"
                                autoPlay
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <iframe
                                className="iframe-carrousel"
                                src="https://www.youtube.com/embed/HuwNgvkAoCI?si=suy64pC4MY1_ZDsg"
                                title="Iran's Aerial Ambitions Will Shock You"
                                allow="autoplay"
                                autoPlay
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <iframe
                                className="iframe-carrousel"
                                src="https://www.youtube.com/embed/E8RYRi6fewQ?si=EPxadjQhkgMes6Bn"
                                title="F-22 vs Russian SU-57 Fighter Pilot Reacts"
                                allow="autoplay"
                                autoPlay
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <h2>TooPiece</h2>
                <div className="category_wraper" style={{ flexDirection: 'row' }}>
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
                                src="https://www.youtube.com/embed/MsEXPjgWqOc?si=uuE1vnVpjhgWO1Ce"
                                title="IT'S ABOUT TO GET CRAZY!!! | Demon Slayer Season 4 Episode 1 Reaction To Defeat Muzan Kibutsuji"
                                allow="autoplay"
                                autoPlay
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <iframe
                                className="iframe-carrousel"
                                src="https://www.youtube.com/embed/AB0JHF8Cjwk?si=ZtgRZkrfC5t5E9Wf"
                                title="TYRION IS MOVING!! | FIRST TIME WATCHING *GAME OF THRONES* Season 2x3 REACTION"
                                allow="autoplay"
                                autoPlay
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <iframe
                                className="iframe-carrousel"
                                src="https://www.youtube.com/embed/84QRhLmzynM?si=QgfvRwJg8Y4AQVfv"
                                title="HUHHH?! 😳 | When The Phone Rings (지금 거신 전화는) Episode 1 Reaction"
                                allow="autoplay"
                                autoPlay
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <iframe
                                className="iframe-carrousel"
                                src="https://www.youtube.com/embed/aKfVsBnh-No?si=UscxzNwjljRYNis9"
                                title="This Anime Bro... 🤣 DAN DA DAN Episode 9 (REACTION)"
                                allow="autoplay"
                                autoPlay
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <iframe
                                className="iframe-carrousel"
                                src="https://www.youtube.com/embed/bKCSvokxjQg?si=ZHTJnQUr9w1Z7hpp"
                                title="AIRA AWAKENS SILKY!!! DAN DA DAN Episode 8 (REACTION)"
                                allow="autoplay"
                                autoPlay
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <iframe
                                className="iframe-carrousel"
                                src="https://www.youtube.com/embed/usJfXyhILYU?si=-c1oeCLLRZeutQXG"
                                title="THIS IS THE BEST EPISODE EVER. PEAK. 🔥 | Demon Slayer Season 4 Episode 8 REACTION"
                                allow="autoplay"
                                autoPlay
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <iframe
                                className="iframe-carrousel"
                                src="https://www.youtube.com/embed/kgdMmcED_Y8?si=pBjDHwjhWNIoLPpW"
                                title="TOKITO 2v1?!?! Demon Slayer Season 4 Episode 4 Reaction"
                                allow="autoplay"
                                autoPlay
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <iframe
                                className="iframe-carrousel"
                                src="https://www.youtube.com/embed/pr739BZzT0Y?si=wdZm-xahMEY1zTtN"
                                title="BAELISH!!! | FIRST TIME WATCHING *GAME OF THRONES* Season 1 Episode 7 REACTION"
                                allow="autoplay"
                                autoPlay
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <iframe
                                className="iframe-carrousel"
                                src="https://www.youtube.com/embed/gUlIByWeo58?si=5LWlGlFFc4BzrDqh"
                                title="😰🤬 FIRST TIME WATCHING *GAME OF THRONES* Season 1 Episode 9 Baelor REACTION"
                                allow="autoplay"
                                autoPlay
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <h2>FlutterFlow</h2>
                <div className="category_wraper" style={{ flexDirection: 'row' }}>
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
                                src="https://www.youtube.com/embed/u9nTpvq4LhY?si=6M7O_dk8qJPCRMX2"
                                title="FlutterFlow Apps Can TALK Now (Here's How) | The Great Big Quiz of Everything | Tutorial Part 3"
                                allow="autoplay"
                                autoPlay
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <iframe
                                className="iframe-carrousel"
                                src="https://www.youtube.com/embed/x7iUmWYiaQQ?si=ui2w5nPAp-UZaqwB"
                                title="Supabase Setup (Database & Auth) in FlutterFlow | The Great Big Quiz of Everything | Tutorial Part 1"
                                allow="autoplay"
                                autoPlay
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <iframe
                                className="iframe-carrousel"
                                src="https://www.youtube.com/embed/rUEEbbbSNtY?si=_89H6wJ7oABEEPJV"
                                title="Record & Transcribe Audio in FlutterFlow | Legacy App Part 2"
                                allow="autoplay"
                                autoPlay
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <iframe
                                className="iframe-carrousel"
                                src="https://www.youtube.com/embed/TuFuV05yy48?si=B8ZA5lHezqbBjO-Q"
                                title="Dynamic Animations in FlutterFlow | Interactive Tutorial | Legacy App Part 3"
                                allow="autoplay"
                                autoPlay
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <iframe
                                className="iframe-carrousel"
                                src="https://www.youtube.com/embed/z3An6cz-3Ms?si=L63MgzXcAnsykNYD"
                                title="Create a Family Memories App in FlutterFlow | Essential Setup & UI Tutorial | Legacy App Part 1"
                                allow="autoplay"
                                autoPlay
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <h2>Doctor Rana, DDS</h2>
                <div className="category_wraper" style={{ flexDirection: 'row' }}>
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
                                src="https://www.youtube.com/embed/Pjp-rCxfmXU?si=sgVAXjwW7jDW1rFq"
                                title="mexico travel vlog: tulum + cancun | ruins, cenotes & an indian wedding"
                                allow="autoplay"
                                autoPlay
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <iframe
                                className="iframe-carrousel"
                                src="https://www.youtube.com/embed/dC6zV3_cGCY?si=0-YDZYLj2hKkUtk1"
                                title="pov: life as a new grad dentist living in Miami"
                                allow="autoplay"
                                autoPlay
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <iframe
                                className="iframe-carrousel"
                                src="https://www.youtube.com/embed/UnUuJhqxsv8?si=mzTFPLPG1hNO-NgE"
                                title="How I Turned Dentistry into a Dream Life in Miami (VLOG)"
                                allow="autoplay"
                                autoPlay
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <iframe
                                className="iframe-carrousel"
                                src="https://www.youtube.com/embed/dC5FpZ2y0lI?si=4MGEZaQVAqd2jHa5"
                                title="pov: life as a new grad dentist living in Miami"
                                allow="autoplay"
                                autoPlay
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <h2>OneTwo Stop</h2>
                <div className="category_wraper" style={{ flexDirection: 'row' }}>
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
                                src="https://www.youtube.com/embed/riJJb8ln3PM?si=O8N3nM90Nv-Q4FfU"
                                title="We Delivered 80 Porta Potties in 48 Hours – With Just 4 Guys"
                                allow="autoplay"
                                autoPlay
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <iframe
                                className="iframe-carrousel"
                                src="https://www.youtube.com/embed/8s9XTIhwRA8?si=nplWtqeVxqWBvhMF"
                                title="Festival Setup, Restock Run & TP Review – A Full Day in the Portable Toilet Business"
                                allow="autoplay"
                                autoPlay
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <iframe
                                className="iframe-carrousel"
                                src="https://www.youtube.com/embed/tfve3nXVAFo?si=nSFGKl5f8XAVTYvL"
                                title="Before the Music Starts: The Dirty Job Behind the Scenes"
                                allow="autoplay"
                                autoPlay
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <h2>Athlete With Asthma</h2>
                <div className="category_wraper" style={{ flexDirection: 'row' }}>
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
                                src="https://www.youtube.com/embed/he16ZwNOClg?si=cQtM1z11aQLX8M1M"
                                title="Hi, I'm Jonny Havey | Athlete With Asthma (my story)"
                                allow="autoplay"
                                autoPlay
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <iframe
                                className="iframe-carrousel"
                                src="https://www.youtube.com/embed/TEUJO_DDOyU?si=c5iQdZgCM64ZZ4SX"
                                title="What Is Asthma?"
                                allow="autoplay"
                                autoPlay
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <iframe
                                className="iframe-carrousel"
                                src="https://www.youtube.com/embed/SQCBqRvqHBc?si=FMd8z8EZexoAJ3J6"
                                title="Best Breathing Techniques for Running with Asthma (How To Breathe)"
                                allow="autoplay"
                                autoPlay
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <iframe
                                className="iframe-carrousel"
                                src="https://www.youtube.com/embed/0zKZoiY9shQ?si=Ed2DSs6uzmMHso9I"
                                title="How I ran my first marathon with asthma (asthma and endurance)"
                                allow="autoplay"
                                autoPlay
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <iframe
                                className="iframe-carrousel"
                                src="https://www.youtube.com/embed/IEJ6suqVK3I?si=eEeKKl1a6EjScpKx"
                                title="Managing Asthma with Yoga (how yoga sculpt helps me with my asthma)"
                                allow="autoplay"
                                autoPlay
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <iframe
                                className="iframe-carrousel"
                                src="https://www.youtube.com/embed/umA6Qvu7s7g?si=c9sXCsudBLjxVoZ2"
                                title="Working Out with Asthma (my top tips for success)"
                                allow="autoplay"
                                autoPlay
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <h2>Its Jermaine Man</h2>
                <div className="category_wraper" style={{ flexDirection: 'row' }}>
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
                                src="https://www.youtube.com/embed/f3W7trZ_nJk?si=23ArtB4FLtf7-TFM"
                                title="15 Min Strong ABS & Core No Equipment, No Repeat"
                                allow="autoplay"
                                autoPlay
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <iframe
                                className="iframe-carrousel"
                                src="https://www.youtube.com/embed/Nryi8r2dtdw?si=4H_lANDCts9yll-N"
                                title="🌟 8 Min TABATA FULLBODY CHALLENGE | No Weights Beginner Friendly 20/10 Session"
                                allow="autoplay"
                                autoPlay
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <iframe
                                className="iframe-carrousel"
                                src="https://www.youtube.com/embed/a8krp-ntfrk?si=ceDZMpQPPq_0GiVL"
                                title="🔥 15 Min Extreme Ab WORKOUT: Advanced 50/10 Core Circuit"
                                allow="autoplay"
                                autoPlay
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <iframe
                                className="iframe-carrousel"
                                src="https://www.youtube.com/embed/50cNHSIueFM?si=_u_nYOTlfJFdqPzv"
                                title="🥊💪 13 Min Ultimate FullBody HIIT Workout with Boxing Moves 💥"
                                allow="autoplay"
                                autoPlay
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <h2>Shorts</h2>
                <div className="category_wraper" style={{ flexDirection: 'row' }}>
                    <Swiper
                        grabCursor={true}
                        navigation={true}
                        breakpoints={{
                            768: {
                                slidesPerView: 4,
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
                                src="https://www.youtube.com/embed/RIE1UqoIoE0?si=Zdm1p6ZztYz0ezvm"
                                title="15 Min Strong ABS & Core No Equipment, No Repeat"
                                allow="autoplay"
                                autoPlay
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <iframe
                                className="iframe-carrousel"
                                src="https://www.youtube.com/embed/zJliASgShWU?si=3XrcHGTQs8xHokfn"
                                title="🌟 8 Min TABATA FULLBODY CHALLENGE | No Weights Beginner Friendly 20/10 Session"
                                allow="autoplay"
                                autoPlay
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <iframe
                                className="iframe-carrousel"
                                src="https://www.youtube.com/embed/mB2HQNsp3Bc?si=wtVFt9QuVxIA1hNq"
                                title="🔥 15 Min Extreme Ab WORKOUT: Advanced 50/10 Core Circuit"
                                allow="autoplay"
                                autoPlay
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <iframe
                                className="iframe-carrousel"
                                src="https://www.youtube.com/embed/VoMB1Gvf5oE?si=DuD1hMCqAn_Vwrtk"
                                title="🥊💪 13 Min Ultimate FullBody HIIT Workout with Boxing Moves 💥"
                                allow="autoplay"
                                autoPlay
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    );
};

