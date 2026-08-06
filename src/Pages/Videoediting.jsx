import video from "../assets/vid/banners/Banner Home VIDEOEDITING.mp4"
import AndreCassiano from "/AndreCassiano.mp4"
import AndreCassiano15seg from "/Andre Cassiano.mp4"
import Interview_Tacoma_Farmers from "/Interview_Tacoma_Farmers.mp4"
import Interview_Tacoma_Farmers15seg from "/Interview_Tacoma_Farmers15seg.mp4"
import PanchoVertical from "/PanchoVertical.mp4"
import PanchoVertical15seg from "/PanchoVertical15seg.mp4"
import Tacoma_Farmers from "/Tacoma_Farmers.mp4"
import Tacoma_Farmers15seg from "/Tacoma_Farmers15seg.mp4"
import Vendimia from "/Vendimia.mp4"
import Vendimia15seg from "/Vendimia15seg.mp4"
import Zee from "/Zee.mp4"
import Zee15seg from "/Zee15seg.mp4"
import ZOOM_TRB from "/ZOOM_TRB.mp4"
import ZOOM_TRB15seg from "/ZOOM_TRB15seg.mp4"
import AveryJason from "/AveryJason.mp4"
import AveryJason15seg from "/AveryJason15seg.mp4"
import CaitlynThomas from "/CaitlynThomas.mp4"
import CaitlynThomas15seg from "/CaitlynThomas15seg.mp4"
import ChristinaMatth from "/ChristinaMatth.mp4"
import ChristinaMatth15seg from "/ChristinaMatth15seg.mp4"
import geishachris from "/geishachris.mp4"
import geishachris15seg from "/geishachris15seg.mp4"
import Jacki from "/Jacki.mp4"
import Jacki15seg from "/Jacki15seg.mp4"
import JessicaNick from "/JessicaNick.mp4"
import JessicaNick15seg from "/JessicaNick15seg.mp4"
import Jennifer from "/Jennifer.mp4"
import Jennifer15seg from "/Jennifer15seg.mp4"
import KatiChris from "/KatiChris.mp4"
import KatiChris15seg from "/KatiChris15seg.mp4"
import LindsayNick from "/LindsayNick.mp4"
import LindsayNick15seg from "/LindsayNick15seg.mp4"
import Sunny1 from "/Sunny1.mp4"
import Sunny2 from "/Sunny2.mp4"
import Sunny3 from "/Sunny3.mp4"
import Sunny4 from "/Sunny4.mp4"
import saasreel from "/saasreel.mp4"

import React, { useRef, useState, useEffect } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import mini_Filmmaking from "../assets/vid/mini/Miniatura_FILMMAKING.mp4"
import mini_Animation from "../assets/vid/mini/Miniatura_ANIMACION.mp4"
import mini_Colorgrading from "../assets/vid/mini/Miniatura_COLORGRADING.mp4"

import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, EffectCards } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-coverflow"
import { Modal } from "../components/Modal"
import AnimatedLink from "../components/AnimatedLink"
import TypographyReveal from "../components/ui/TypographyReveal"

const Videoediting = () => {
   const work_container = useRef()
   const projects_menu_grid = useRef()

   const SECTIONS = [
      {
         id: "saas-promo",
         title: "High End SaaS Promo",
         menuTitle: "High-End SaaS Promo",
         type: "landscape",
         items: [
            {
               title: "SaaS Animation Reel",
               client: "Algocentric Digital",
               description:
                  "<strong>Motion Graphics</strong> for Algocentric Digital – a Toronto-based AI-powered Fractional CMO agency for B2B SaaS – covering long-form talking head Youtube videos with custom <strong>Motion Graphics</strong> and <strong>After Effects animations</strong>, plus repurposed short-form vertical content, all crafted to make complex topics like paid search, SEO, and conversion rate optimization visually compelling for a <strong>SaaS Founder Audience</strong>. This is a compilation of Animations we've done for their Youtube.",
               src: saasreel,
               fullSrc: saasreel,
            },
            {
               title: "Nexus x Orange",
               client: "NexusGPT",
               description:
                  "<strong>Long-form Videoediting</strong> and <strong>Colorgrading</strong> for Agent Nexus – an AI agent platform enabling enterprises to build and deploy autonomous agents at scale – crafting a customer success story featuring Orange's Digital Sales team, highlighting how AI-powered agents transformed customer onboarding across multiple European markets, aimed at driving awareness and conversions among enterprise decision-makers.",
               src: ZOOM_TRB15seg,
               fullSrc: ZOOM_TRB,
            },
            {
               title: "Go to Market for SaaS: The Quiet Shift Changing Everything",
               client: "Algocentric Digital",
               description:
                  "Edited for Algocentric Digital — a Toronto-based AI-powered Fractional CMO agency — this video breaks down complex GTM frameworks using custom Motion Graphics and After Effects animations designed specifically for SaaS founders and marketing leaders.",
               src: saasreel,
               fullSrc: saasreel,
            },
            {
               title: "FlutterFlow Apps Can TALK Now",
               client: "FlutterFlow",
               description:
                  "<strong>Video Editing & Motion Design</strong> for FlutterFlow´s Youtube Channel — the leading visual development platform. This 4 part youtube series showcases a complex integration of AI-powered voices (ElevenLabs), Supabase, and BuildShip. It features a engaging intro made in After Effects and dynamic pacing to simplify advanced API workflows and backend logic for a global developer audience.",
               src: saasreel,
               fullSrc: saasreel,
            },
         ],
      },
      {
         id: "social-media",
         title: "Social Media & Ads",
         menuTitle: "Social Media & Ads",
         type: "portrait",
         items: [
            {
               title: "Ads for OneTwoStep",
               client: "OneTwoStep",
               description:
                  "<strong>Social media AD</strong> videoediting for OneTwoStep – a Toronto-based porta potty rental company serving construction sites, festivals, and backyard events across the GTA – crafting a series of Short-Form video Ads designed to turn a no-nonsense service into <strong>Scroll-stopping content</strong> that drives bookings and builds <strong>Bookings</strong> and <strong>Brand Awareness</strong> across social platforms.",
               src: Zee15seg,
               fullSrc: Zee,
            },
            {
               title: "Bold Fortune",
               client: "BeardBrand",
               description:
                  "<strong>Short-form video Ad</strong> editing for BeardBrand – a premium men's grooming and fragrance brand based in Austin, TX – crafting a product video ad for their Bold Fortune cologne, a warm and complex scent built around leather, whiskey, oud, and tobacco, designed to stop the scroll and drive conversions across social media platforms.",
               src: Sunny1,
               fullSrc: Sunny1,
            },
            {
               title: "Shortform for Socials",
               client: "Aapsedation",
               description:
                  "Video Editing and Colorgrading for AAPS — a specialized dental sedation practice in Albany, NY. This Instagram reel features Sarah Albany sharing her patient-care philosophy, focusing on gentle treatment for adults with dental anxiety. The edit prioritizes a calm, empathetic pace and clean visual aesthetic to build trust and resonate with a nervous audience.",
               src: Sunny2,
               fullSrc: Sunny2,
            },
            {
               title: "Overcome the Algorithm",
               client: "Scalency.ai",
               description:
                  "Short-form Video Editing & AI Content Creation for Scalency.ai — an AI-driven marketing agency. This high-impact Reel, produced using Higgsfield and other AI tools, serves as a rapid tutorial on building marketing strategies with AI Avatars and digital product integration. The edit features fast-paced storytelling and AI-generated visuals designed to showcase the future of automated brand scaling.",
               src: Sunny3,
               fullSrc: Sunny3,
            },
            {
               title: "Pinterest for e-Commerce",
               client: "Zipchatai",
               description:
                  "Short-form Video Editing for ZipChat AI — an AI-driven sales and support chatbot platform.This high-retention Reel focuses on strategic Pinterest Marketing, providing actionable tips on how to drive e-commerce sales through visual search. The edit features fast-paced Motion Graphics, engaging Captions, and a dynamic structure designed to convert social traffic into qualified leads for AI-powered business solutions.",
               src: Sunny4,
               fullSrc: Sunny4,
            },
            {
               title: "Dark Circles",
               client: "PeepClub",
               description:
                  "Short-form Video Ad Editing for Peep Club — a London-based eye care brand dedicated to holistic ocular health. This High-conversion Social Media Ad showcases their specialized solution for dark circles, utilizing a clean, medical-aesthetic visual style combined with fast-paced storytelling. The edit focuses on clear before-and-after transitions, engaging captions, and a problem-solution narrative designed to drive direct sales and brand authority across TikTok and Instagram.",
               src: PanchoVertical15seg,
               fullSrc: PanchoVertical,
            },
            {
               title: "Old Money Fragance",
               client: "BeardBrand",
               description:
                  "Short-form Ad Editing for Beardbrand — a leading authority in men’s grooming and lifestyle. This Social Media Campaign promotes their signature 'Old Money' fragrance, utilizing a sophisticated, Cinematic edit that aligns with the brand's High-end aesthetic. The project focuses on elegant pacing, rhythmic sound design, and Luxe Color Grading to evoke a sense of exclusivity and timeless style, optimized for High Engagement and Conversion on TikTok and Instagram.",
               src: PanchoVertical15seg,
               fullSrc: PanchoVertical,
            },
            {
               title: "Heated Eye Wand - Product AD",
               client: "PeepClub",
               description:
                  "Short-form AI Video Ad for Peep Club — a London-based ocular health brand. This project features the Heated Eye Wand, a premium wellness device. We utilized AI-powered video tools to enhance visual quality and scale production, integrating custom Motion Graphics overlays to highlight product benefits and technical specs. The edit combines a clean, clinical aesthetic with a high-conversion narrative designed to drive direct sales via TikTok and Instagram Ads.",
               src: PanchoVertical15seg,
               fullSrc: PanchoVertical,
            },
            {
               title: "Wrinkle Retreat Pro = Product AD",
               client: "SolaWave",
               description:
                  "Beauty-Tech Ad Editing for Solawave — an award-winning skin tech brand. This high-conversion social media campaign features the Wrinkle Retreat Pro, a specialized LED therapy device. The edit focuses on a sleek, clinical-meets-lifestyle aesthetic, utilizing smooth transitions, and a problem-solution narrative. Optimized for Facebook and Instagram, the project highlights technical product efficacy while maintaining the brand's high-end visual identity to drive DTC sales.",
               src: PanchoVertical15seg,
               fullSrc: PanchoVertical,
            },
            {
               title: "Enchantress - Paint Process",
               client: "Artist",
               description:
                  "Premium After Effects animations crafted for Algocentric Digital’s YouTube channel. High-impact motion design tailored to elevate digital presence through strategic creative direction.",
               src: PanchoVertical15seg,
               fullSrc: PanchoVertical,
            },
            {
               title: "Foundational Daily Fiber",
               client: "SuperGut",
               description:
                  "High-Conversion Health-Tech Ad Editing for Supergut — a leading gut-health nutrition brand backed by clinical science. This Social Media Campaign for Foundational Daily Fiber focuses on a high-retention, educational narrative that simplifies the benefits of prebiotic fiber. The edit utilizes a clean, wellness-focused aesthetic, blending fast-paced transitions with dynamic text overlays to highlight nutritional facts and drive DTC sales across TikTok, Facebook and Instagram.",
               src: PanchoVertical15seg,
               fullSrc: PanchoVertical,
            },
            {
               title: "Shortform for Algocentric Digital",
               client: "Algocentric Digital",
               description:
                  "Short-form Video Editing for Algocentric Digital — a Toronto-based AI-powered Fractional CMO agency. I specialize in repurposing Long-form YouTube videos into high-impact Shorts and TikToks, using custom Motion Graphics and high-retention pacing to make complex B2B SaaS Marketing topics—like SEO and CRO—visually compelling for a founder audience.",
               src: PanchoVertical15seg,
               fullSrc: PanchoVertical,
            },
         ],
      },
      {
         id: "podcast",
         title: "Podcast Videoediting",
         menuTitle: "Podcast videoediting",
         type: "landscape",
         items: [
            {
               title: "He's Building the Future of AI | Dara Ladjevardian",
               client: "Carrara",
               description:
                  "Long-form YouTube videoediting and Short-form content production for Village Global — a network-driven venture capital firm backed by the world's top entrepreneurs — featuring a founder interview with Dara Ladjevardian, CEO of Delphi, covering consumer category creation, virality vs. product-market fit, and contrarian investing, repurposed into short-form clips for broader reach across social platforms.",
               src: Interview_Tacoma_Farmers15seg,
               fullSrc: Interview_Tacoma_Farmers,
            },
            {
               title: "Great customer experiences start with healthy teams.",
               client: "ZURB",
               description:
                  "Podcast Videoediting for ZURB — a Silicon Valley-based product design firm and creators of the Glare framework — producing the 'Glaringly Obvious' series, featuring a deep-dive conversation with Thomas Wilson on how organizational design and internal systems shape the customer experience, focusing on breaking down silos and aligning team goals to drive better product outcomes at scale.",
               src: Interview_Tacoma_Farmers15seg,
               fullSrc: Interview_Tacoma_Farmers,
            },
         ],
      },
      {
         id: "youtube",
         title: "YouTube Content",
         menuTitle: "Youtube",
         type: "youtube",
         items: [
            {
               title: "We Delivered 80 Porta Potties in 48 Hours",
               client: "OneTwoStop",
               description:
                  "Long-form YouTube Vlog Editing and Youtube Shorts for OneTwoStop — a Toronto-based porta potty rental company serving the GTA — cutting raw behind-the-scenes footage of an 80-unit weekend delivery into an engaging, fast-paced brand video, plus repurposed vertical short-form content to extend reach across social media platforms.",
               youtubeId: "riJJb8ln3PM",
            },
            {
               title: "Estoy EMBARAZADA😰 / Briysufamilia",
               client: "Britney Corrales",
               description:
                  "YouTube Video Editing for Britney Corrales — a leading lifestyle influencer with over 12.6M combined followers.This is a high-retention Pregnancy Prank vlog for YouTube with over 700k views, balancing comedic timing with emotional storytelling to maximize watch time. This project is part of an ongoing partnership managing her Lifestyle Vlogs and repurposing key moments into high-impact Short-Form content optimized for TikTok and Instagram Reels to drive cross-platform engagement.",
               youtubeId: "nVPrR1E6Rso",
            },

            {
               title: "How to Create a Video Podcast Using Descript AI",
               client: "eLearning Partners",
               description:
                  "Long-term Video Editing for E-Learning Partners — a leading online course consultancy with whom I’ve collaborated for years, editing over 200 videos to date. Beyond managing their Main Channel, I’ve also partnered on diverse projects for their high-ticket clients, editing professional Online Courses and educational content.",
               youtubeId: "qwzHqNJ_KGI",
            },
            {
               title: "How Russia and the USA Would Actually Fight Each Other",
               client: "Ryan Bodenheimer",
               description:
                  "YouTube Video Editing for Max Afterburner — an aviation channel led by a former F-16 Thunderbird and F-15E Combat Fighter pilot. I manage the Post-production for long-form episodes covering military technology, aviation analysis, and geopolitics. The editing process focuses on high-octane storytelling, integrating cinematic cockpit footage with technical breakdowns to maintain high retention among a global audience of aviation enthusiasts and defense experts.",
               youtubeId: "MsEXPjgWqOc",
            },
            {
               title: "Demon Slayer Season 4 Episode 8 REACTION",
               client: "TooPiece",
               description:
                  "YouTube Video Editing & Short-Form Repurposing for TooPiece — a fast-growing anime and manga commentary channel. I manage the post-production for long-form reaction content, including the Demon Slayer (Kimetsu no Yaiba) series, utilizing dynamic pacing and visual effects to maximize audience retention. This project includes strategic Short-Form repurposing, transforming key reaction highlights into high-impact vertical content optimized for YouTube Shorts and TikTok engagement.",
               youtubeId: "uSsW5HHfKFw",
            },
            {
               title: "POV: life as a new grad dentist living in Miami",
               client: "Dr Rana, DDS",
               description:
                  "YouTube Lifestyle Vlog Editing & Content Strategy for Dr. Aakash “Kash” Rana — a Miami-based Doctor of Dental Surgery and high-performance lifestyle creator. We managed the post-production for his long-form vlogs, blending clinical dentistry insights with business and fitness storytelling. The edit focuses on a cinematic yet authentic 'vlog-style' aesthetic, using dynamic pacing and storytelling to make professional dental education relatable and engaging for a global audience of aspiring clinicians.",
               youtubeId: "f3W7trZ_nJk",
            },
         ],
      },
      {
         id: "documentary",
         title: "Documentary Films",
         menuTitle: "Documentary",
         type: "landscape",
         items: [
            {
               title: "Tacoma Farmers",
               client: "Olive Group, MyForkSupportFarms",
               description:
                  "Long-form documentary video editing for My Fork Supports Farms — a Washington State advocacy campaign supporting local agriculture and food security — produced through Olive Group, weaving together interviews with local farmers into a brand documentary that puts a human face on family farming and drives community support for farmers markets and local food systems.",
               src: Interview_Tacoma_Farmers15seg,
               fullSrc: Interview_Tacoma_Farmers,
            },
            {
               title: "Harvest 2024",
               client: "Pares Balta",
               description:
                  "Video Editing and Colorgrading for Parés Baltà — a prestigious family-owned winery in Penedès, Spain, specializing in organic and biodynamic viticulture since 1790. Transforming raw harvest footage into a visually rich narrative that captures the traditional hand-picking process and the transition from vineyard to transport. The edit features custom Colorgrading designed to enhance the natural textures of the land and the vibrant tones of the organic grapes, reflecting the brand’s commitment to sustainability and artisanal excellence.",
               src: Vendimia15seg,
               fullSrc: Vendimia,
            },
            {
               title: "Risk in Farms",
               client: "Olive Group, MyForkSupportFarms",
               description:
                  "Documentary for MyForkSupportsFarms — a non-profit dedicated to connecting consumers with the farming community. This high-impact safety campaign features farmer Kelyn Wallin, who shares his survival story following a near-fatal collision to advocate for road safety. The edit focuses on emotional storytelling, utilizing archival imagery and testimonial footage to drive a critical message of mutual respect between drivers and operators of heavy agricultural machinery.",
               src: Tacoma_Farmers15seg,
               fullSrc: Tacoma_Farmers,
            },
            {
               title: "Action Trailer from Scenes Stage Choreographies",
               client: "Andre Cassiano",
               description:
                  "Cinematic Sports Editing & Colorgrading — A high-octane bodybuilding action edit featuring dramatic pacing, rhythmic sound design, and custom Colorgrading to transform competition footage into a professional-grade athlete showcase.",
               src: AndreCassiano15seg,
               fullSrc: AndreCassiano,
            },
         ],
      },
      {
         id: "weddings",
         title: "Wedding Cinema",
         menuTitle: "Weddings",
         type: "portrait",
         items: [
            {
               title: "Avery & Jason's Story",
               client: "Embark Films",
               description:
                  "Short-form Wedding Videoediting for Embark Wedding Films — a Story-driven wedding videography company with over 12 years of experience — transforming raw wedding footage into polished Short-form content that captures the emotion of each couple's story and resonates with future brides and grooms across social media.",
               src: AveryJason15seg,
               fullSrc: AveryJason,
            },
            {
               title: "Caitlyn & Thomas's Wedding",
               client: "Embark Films",
               description:
                  "Short-form Wedding Videoediting for Embark Wedding Films — a Story-driven wedding videography company with over 12 years of experience — transforming raw wedding footage into polished Short-form content that captures the emotion of each couple's story and resonates with future brides and grooms across social media.",
               src: CaitlynThomas15seg,
               fullSrc: CaitlynThomas,
            },
            {
               title: "Christina & Matthew",
               client: "Embark Films",
               description:
                  "Short-form Wedding Videoediting for Embark Wedding Films — a Story-driven wedding videography company with over 12 years of experience — transforming raw wedding footage into polished Short-form content that captures the emotion of each couple's story and resonates with future brides and grooms across social media.",
               src: ChristinaMatth15seg,
               fullSrc: ChristinaMatth,
            },
            {
               title: "Geisha & Chris",
               client: "Embark Films",
               description:
                  "Short-form Wedding Videoediting for Embark Wedding Films — a Story-driven wedding videography company with over 12 years of experience — transforming raw wedding footage into polished Short-form content that captures the emotion of each couple's story and resonates with future brides and grooms across social media.",
               src: geishachris15seg,
               fullSrc: geishachris,
            },
            {
               title: "Jacki's Wedding",
               client: "Embark Films",
               description:
                  "Short-form Wedding Videoediting for Embark Wedding Films — a Story-driven wedding videography company with over 12 years of experience — transforming raw wedding footage into polished Short-form content that captures the emotion of each couple's story and resonates with future brides and grooms across social media.",
               src: Jacki15seg,
               fullSrc: Jacki,
            },
            {
               title: "Jessica & Nick",
               client: "Embark Films",
               description:
                  "Short-form Wedding Videoediting for Embark Wedding Films — a Story-driven wedding videography company with over 12 years of experience — transforming raw wedding footage into polished Short-form content that captures the emotion of each couple's story and resonates with future brides and grooms across social media.",
               src: JessicaNick15seg,
               fullSrc: JessicaNick,
            },
            {
               title: "Jennifer's Wedding",
               client: "Embark Films",
               description:
                  "Short-form Wedding Videoediting for Embark Wedding Films — a Story-driven wedding videography company with over 12 years of experience — transforming raw wedding footage into polished Short-form content that captures the emotion of each couple's story and resonates with future brides and grooms across social media.",
               src: Jennifer15seg,
               fullSrc: Jennifer,
            },
            {
               title: "Kati & Chris",
               client: "Embark Films",
               description:
                  "Short-form Wedding Videoediting for Embark Wedding Films — a Story-driven wedding videography company with over 12 years of experience — transforming raw wedding footage into polished Short-form content that captures the emotion of each couple's story and resonates with future brides and grooms across social media.",
               src: KatiChris15seg,
               fullSrc: KatiChris,
            },
            {
               title: "Lindsay & Nick",
               client: "Embark Films",
               description:
                  "Short-form Wedding Videoediting for Embark Wedding Films — a Story-driven wedding videography company with over 12 years of experience — transforming raw wedding footage into polished Short-form content that captures the emotion of each couple's story and resonates with future brides and grooms across social media.",
               src: LindsayNick15seg,
               fullSrc: LindsayNick,
            },
         ],
      },
   ]

   const [activeSection, setActiveSection] = useState(SECTIONS[0].id)
   const [displaySectionId, setDisplaySectionId] = useState(SECTIONS[0].id)
   const [isFading, setIsFading] = useState(false)

   const handleSelectSection = (id) => {
      if (id === activeSection || isFading) return
      setActiveSection(id)
      setIsFading(true)
      setTimeout(() => {
         setDisplaySectionId(id)
         setIsFading(false)
      }, 300)
   }

   const [activeSlideIndices, setActiveSlideIndices] = useState(
      SECTIONS.reduce((acc, sec) => {
         acc[sec.id] = 0
         return acc
      }, {}),
   )

   useGSAP(
      () => {
         gsap.from(".work_title", {
            opacity: 0,
            y: 100,
            stagger: 0.1,
         })
      },
      { scope: work_container },
   )

   useGSAP(
      () => {
         gsap.to(".projects_menu_item_fill", {
            scrollTrigger: {
               trigger: "#animation_menu",
               start: "-75% center",
               duration: 0.1,
            },
            width: "100%",
         })
         gsap.to(".projects_menu_item_fill", {
            scrollTrigger: {
               trigger: "#animation_menu",
               start: "-75% center",
            },
            autoAlpha: 0,
            delay: 0.4,
         })
         gsap.to("#ghost", {
            scrollTrigger: {
               trigger: "#animation_menu",
               start: "-75% center",
            },
            color: "rgba(175, 182, 223)",
            borderBottomWidth: "2px",
            delay: 1,
         })

         gsap.from("#filmmaking_menu", {
            scrollTrigger: {
               trigger: "#filmmaking_menu",
               start: "top bottom",
               end: "top 90%",
               scrub: 1,
            },
            opacity: 0,
            y: 100,
         })

         gsap.from("#animation_menu", {
            scrollTrigger: {
               trigger: "#animation_menu",
               start: "top bottom",
               end: "top 90%",
               scrub: 1,
            },
            opacity: 0,
            y: 100,
         })
         gsap.from("#colorgrading_menu", {
            scrollTrigger: {
               trigger: "#colorgrading_menu",
               start: "top bottom",
               end: "top 90%",
               scrub: 1,
            },
            opacity: 0,
            y: 100,
         })

         {
            let film = document.querySelector("#filmmaking_menu")
            let tl_filmmaking = gsap.timeline({ paused: true })

            tl_filmmaking.to("#filmmaking_mini", {
               duration: 0.5,
               display: "block",
               width: "100%",
            })

            film.addEventListener("mouseenter", () =>
               tl_filmmaking.timeScale(1).play(),
            )
            film.addEventListener("mouseleave", () =>
               tl_filmmaking.timeScale(1.5).reverse(),
            )

            let animation = document.querySelector("#animation_menu")
            let tl_animation = gsap.timeline({ paused: true })

            tl_animation.to("#animation_mini", {
               duration: 0.5,
               display: "block",
               width: "100%",
            })
            animation.addEventListener("mouseenter", () =>
               tl_animation.timeScale(1).play(),
            )
            animation.addEventListener("mouseleave", () =>
               tl_animation.timeScale(1.5).reverse(),
            )

            let colorgrading = document.querySelector("#colorgrading_menu")
            let tl_colorgrading = gsap.timeline({ paused: true })

            tl_colorgrading.to("#colorgrading_mini", {
               duration: 0.5,
               display: "block",
               width: "100%",
            })
            colorgrading.addEventListener("mouseenter", () =>
               tl_colorgrading.timeScale(1).play(),
            )
            colorgrading.addEventListener("mouseleave", () =>
               tl_colorgrading.timeScale(1.5).reverse(),
            )
         }
      },
      { scope: projects_menu_grid },
   )

   useEffect(() => {
      const observerOptions = {
         root: null,
         rootMargin: "-45% 0px -45% 0px",
         threshold: 0,
      }

      const observer = new IntersectionObserver((entries) => {
         entries.forEach((entry) => {
            if (entry.isIntersecting) {
               setActiveSection(entry.target.id)
            }
         })
      }, observerOptions)

      SECTIONS.forEach((section) => {
         const el = document.getElementById(section.id)
         if (el) observer.observe(el)
      })

      return () => observer.disconnect()
   }, [])

   const texts = [
      '"Alan, is an exceptional video producer. Not just an editor, but a creative director. We will definitely work with him if we have a project in the future in video."',
      '"Was able to stick through the project and make changes on the fly."',
      '"Great job, thank you for the good work!"',
      '"Complete professional that I recommend, delivering every detail of my perfectionist screenplay and responded to suggestions for revisions without a hitch."',
      '"Great skills in action fast-paced editing, track and scene sync, VFX effects and 2D animation."',
      '"Did a really really good edit job. We struggled at first with the colour grading but the issue was fixed. Thank you"',
      '"Great work! did precisely what was asked in a timely fashion and with great quality!"',
      '"Bono Films did a great job delivering what I asked for. Will work with again in the future."',
   ]

   const [isModalOpen, setIsModalOpen] = useState(false)
   const [selectedVideo, setSelectedVideo] = useState("")

   const handleClick = (videoSrc) => {
      setSelectedVideo(videoSrc)
      setIsModalOpen(true)
   }

   return (
      <section className="page_section">
         <div ref={work_container} className="work_container">
            <div className="banner_container">
               <video
                  autoPlay
                  muted
                  loop
                  preload="metadata"
                  src={video}
                  className="banner_videoediting"></video>
            </div>
            <h1 id="Videoediting_title" className="work_title">
               Videoediting
            </h1>
            <h1 className="work_title work_title_stroke">Videoediting</h1>

            <div className="videoediting_intro">
               <TypographyReveal
                  revealType="character"
                  animationType="blurIn"
                  start="top 90%">
                  Every project has a story to tell, and we are here to help you tell
                  it.
               </TypographyReveal>
            </div>

            <div className="videoediting_page_layout">
               <aside className="videoediting_sidebar">
                  <TypographyReveal
                     as="h3"
                     className="sidebar_title"
                     revealType="character"
                     animationType="fadeInUp"
                     // delay={0.9}
                     duration={1}
                     start="top 95%">
                     Videoediting
                  </TypographyReveal>
                  <ul className="sidebar_menu">
                     {SECTIONS.map((section, index) => (
                        <li
                           key={section.id}
                           className={`sidebar_item ${activeSection === section.id ? "active" : ""}`}
                           onClick={() => handleSelectSection(section.id)}>
                           <TypographyReveal
                              as="span"
                              revealType="character"
                              animationType="fadeInUp"
                              stagger={0.02}
                              // delay={0.9 + index * 0.08}
                              start="top 95%">
                              {section.menuTitle}
                           </TypographyReveal>
                        </li>
                     ))}
                  </ul>
               </aside>

               <div className="videoediting_content">
                  {(() => {
                     const section =
                        SECTIONS.find((s) => s.id === displaySectionId) ||
                        SECTIONS[0]
                     const activeIndex = activeSlideIndices[section.id] || 0
                     const currentItem =
                        section.items[activeIndex] || section.items[0]

                     return (
                        <div
                           key={section.id}
                           id={section.id}
                           className={`videoediting_section videoediting_section_wrapper`}>
                           <TypographyReveal
                              as="h2"
                              className="section_title"
                              revealType="character"
                              animationType="fadeInUp"
                              start="top 95%"
                              duration={1}
                              stagger={0.02}>
                              {section.title}
                           </TypographyReveal>
                           <Swiper
                              modules={[EffectCards]}
                              effect="cards"
                              grabCursor={true}
                              centeredSlides={true}
                              loop={false}
                              spaceBetween={10}
                              observer={true}
                              observeParents={true}
                              breakpoints={
                                 section.type === "portrait"
                                    ? {
                                         1024: { slidesPerView: 3 },
                                         768: { slidesPerView: 2 },
                                         0: { slidesPerView: 1.5 },
                                      }
                                    : section.type === "youtube"
                                      ? {
                                           1024: { slidesPerView: 1.1 },
                                           768: { slidesPerView: 1.1 },
                                           0: { slidesPerView: 1.1 },
                                        }
                                      : {
                                           1024: { slidesPerView: 1.2 },
                                           768: { slidesPerView: 1.5 },
                                           0: { slidesPerView: 1.1 },
                                        }
                              }
                              onSlideChange={(swiper) => {
                                 setActiveSlideIndices((prev) => ({
                                    ...prev,
                                    [section.id]: swiper.activeIndex,
                                 }))
                              }}
                              cardsEffect={{
                                 perSlideOffset: 10,
                                 perSlideRotate: 5,
                              }}
                              className={`swiper`}>
                              {section.items.map((item, idx) => (
                                 <SwiperSlide key={idx} className="swiper_slide">
                                    {section.type === "youtube" ? (
                                       <iframe
                                          loading="lazy"
                                          className="iframe-carrousel"
                                          src={`https://www.youtube.com/embed/${item.youtubeId}`}
                                          title={item.title}
                                          allow="autoplay"
                                          allowFullScreen
                                       />
                                    ) : (
                                       <div
                                          onClick={() => handleClick(item.fullSrc)}
                                          className="carousel_video_wrap">
                                          <video
                                             autoPlay
                                             muted
                                             loop
                                             preload="metadata"
                                             src={item.src}
                                             style={{ borderRadius: "8px" }}
                                          />
                                       </div>
                                    )}
                                 </SwiperSlide>
                              ))}
                           </Swiper>

                           {currentItem && (
                              <div className="slide_details">
                                 <div className="slide_details_header">
                                    <TypographyReveal
                                       as="h3"
                                       className="slide_project_title"
                                       revealType="character"
                                       animationType="fadeInUp"
                                       useScrollTrigger={true}
                                       start="top 95%">
                                       {currentItem.title}
                                    </TypographyReveal>
                                    {currentItem.client && (
                                       <span className="slide_client">
                                          <TypographyReveal
                                             key={
                                                "client-label-" + currentItem.title
                                             }
                                             as="span"
                                             revealType="character"
                                             animationType="fadeInUp"
                                             delay={0.4}
                                             useScrollTrigger={true}
                                             start="top 95%">
                                             Client:
                                          </TypographyReveal>
                                          <strong>
                                             <TypographyReveal
                                                as="span"
                                                revealType="character"
                                                animationType="fadeInUp"
                                                delay={0.5}
                                                useScrollTrigger={true}
                                                start="top 95%"
                                                className="inline-block">
                                                {" " + currentItem.client}
                                             </TypographyReveal>
                                          </strong>
                                       </span>
                                    )}
                                 </div>
                                 <TypographyReveal
                                    className="slide_description"
                                    revealType="line"
                                    animationType="blurIn"
                                    delay={0.7}
                                    useScrollTrigger={false}
                                    start="top 98%">
                                    {currentItem.description}
                                 </TypographyReveal>
                              </div>
                           )}
                        </div>
                     )
                  })()}
               </div>
            </div>

            {isModalOpen && (
               <Modal
                  selectedVideo={selectedVideo}
                  setIsModalOpen={setIsModalOpen}
                  setSelectedVideo={setSelectedVideo}
               />
            )}
         </div>

         <section className="projects_menu_section">
            <div ref={projects_menu_grid} className="projects_menu_grid">
               <div id="filmmaking_menu" className="projects_menu_item">
                  <AnimatedLink className="link" to="/filmmaking">
                     <span className="projects_menu_item_fill">Filmmaking</span>
                     <span id="ghost">Film</span>
                     <video
                        autoPlay
                        muted
                        loop
                        loading="lazy"
                        id="filmmaking_mini"
                        className="poject_mini"
                        src={mini_Filmmaking}></video>
                     <span id="ghost">making</span>
                  </AnimatedLink>
               </div>
               <div id="animation_menu" className="projects_menu_item">
                  <AnimatedLink className="link" to="/animation">
                     <span className="projects_menu_item_fill">Animation</span>
                     <span id="ghost">Animation</span>
                     <video
                        autoPlay
                        muted
                        loop
                        id="animation_mini"
                        className="poject_mini"
                        src={mini_Animation}></video>
                  </AnimatedLink>
               </div>
               <div id="colorgrading_menu" className="projects_menu_item">
                  <AnimatedLink className="link" to="/colorgrading">
                     <span className="projects_menu_item_fill">Colorgrading</span>
                     <span id="ghost">Colorgrading</span>
                     <video
                        autoPlay
                        muted
                        loop
                        id="colorgrading_mini"
                        className="poject_mini"
                        src={mini_Colorgrading}></video>
                  </AnimatedLink>
               </div>
            </div>
         </section>
      </section>
   )
}

export default Videoediting
