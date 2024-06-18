import React from "react";
import colorgrading from "../assets/vid/filmmaking/Clase MADA.mp4";
import colorgrading2 from "../assets/vid/filmmaking/MADA Rio.mp4";

const Team = () => {
   return (
      <div>
         <div className="page_section">
            <div className="work_container">
               <h1 className="team_title">Team</h1>
               <div className="team_work_grid">
                  <div className="wraper">
                     <div id="work1" className="img_container">
                        <video
                           muted
                           loop
                           id="team_video"
                           src={colorgrading2}></video>
                     </div>
                     <div id="work2" className="img_container">
                        <video muted loop id="team_video" src={colorgrading}></video>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Team;
