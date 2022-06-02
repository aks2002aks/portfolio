import React from "react";

function Modal({ selectedImg, setSelectedImg }) {
  const handleClick = (e) => {
    if (e.target === undefined) {
      console.log("no")
    } else {
      if (e.target.classList.contains("backdrop")) {
        setSelectedImg(null);
      }
    }
  };
  return (
    <div className="backdrop" onClick={handleClick}>
      <img src={selectedImg} alt="enlarged image" />
    </div>
  );
}

export default Modal;

