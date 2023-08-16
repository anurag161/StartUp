import React, { useState } from "react";
import "./SizeButton.css"; // Add your CSS styles for the button and popup
import size from "../../images/size.jpg";
const SizeButton = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="size-button">
      <button className="show-button" onClick={openPopup}>
        Size
      </button>
      {isPopupOpen && (
        <div className="popup">
          <img src={size} alt="Popup Image" className="popup-image" />
          <button className="close-button" onClick={closePopup}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default SizeButton;
