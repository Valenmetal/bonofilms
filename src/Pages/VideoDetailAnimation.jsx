import React from "react";
import { useParams, Link } from "react-router-dom";

const VideoDetail = () => {
   const { videoId } = useParams();

   return (
      <>
         <div className="video-detail">
            <button className="back-button">
               <Link to={`/animation`}>
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
            <video
               id="animation_video"
               autoPlay
               muted
               loop
               controls
               src={`/${videoId}.mp4`}></video>
         </div>
      </>
   );
};

export default VideoDetail;
