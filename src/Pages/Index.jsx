import React from "react"
import Hero from "../components/Hero"
import Clientes from "../components/Clientes"
import Team from "../components/Team"
import CTASection from "../components/CTASection"
import Carrousel from "../components/Carrousel"

export default function Index() {
   const testimonials = [
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
      <div>
         <Hero />
         <Clientes />
         <Team />
         <Carrousel texts={testimonials} interval={3000} />
         <CTASection
            primaryLink="https://wa.me/5491126512436"
         />
      </div>
   )
}
