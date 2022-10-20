import React from "react";


const Modal = ({ open, children, onClose }) => {
    if (!open) return null

    return ( 
        <div className="modal_Container">
            <div className="modal_Overlay">
                <div className="modal">
                    <div>
                        <h3>Add Event</h3>
                        <input placeholder="Event Title"></input>
                        <input placeholder="Participants"></input>
                        <input placeholder="Begin Time"></input>
                        <input placeholder="End Time"></input>
                        <input placeholder="Event Description"></input>
                    </div>
                    <button onClick={onClose}>Close Modal</button>
                    {children}
                </div>
            </div>

        </div>
     );
}
 
export default Modal;