import React from "react"

export const Modal = ({ selectedVideo, setIsModalOpen, setSelectedVideo }) => {
   const closeModal = () => {
      setIsModalOpen(false)
      setSelectedVideo("")
   }
   const handleOutsideClick = (event) => {
      if (event.target.className === "modal") {
         closeModal()
      }
   }
   return (
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
   )
}
