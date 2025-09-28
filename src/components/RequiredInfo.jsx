import React from "react";
import "../styles/RequiredInfo.css";
import VectorIcon from "../assets/Vector (1).svg";

const RequiredInfo = ({ onClick, className = "" }) => {
  return (
    <div className={`required-info ${className}`} onClick={onClick}>
      <img 
        src={VectorIcon} 
        alt="Info" 
        className="info-icon"
        width="24"
        height="24"
      />
      <span className="required-text">Content Information</span>
    </div>
  );
};

export default RequiredInfo;
