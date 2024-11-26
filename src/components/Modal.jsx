import React from "react"

export const Modal = ({ selectedVideo, setIsModalOpen, setSelectedVideo }) => {
   const handleOutsideClick = (event) => {
      if (event.target.className === "modal") {
         setIsModalOpen(false)
         setSelectedVideo("")
      }
   }
   return (
      <div className="modal" onClick={handleOutsideClick}>
         <div className="modal-content">
            <video
               style={{ borderRadius: ".5em" }}
               src={selectedVideo}
               controls
               autoPlay></video>
         </div>
      </div>
   )
}
