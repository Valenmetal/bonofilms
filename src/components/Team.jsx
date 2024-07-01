import { React } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Team() {
   return (
      <section id="team_section" className="page_section">
         <main className="work_container">
            <h1 className="team_title">Team</h1>
            <div className="team_work_grid"></div>
         </main>
      </section>
   );
}
