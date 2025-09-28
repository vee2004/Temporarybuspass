import React from "react";
import "../styles/Header.css";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Header = ({
  breadcrumb,
  title,
  onBackClick,
  onClockClick,
  showBackArrow = true,
  showClockIcon = true,
}) => {
  return (
    <div className="header-section">
      {breadcrumb && (
        <div
          className="breadcrumb"
          onClick={() => onBackClick && onBackClick()}
        >
          {breadcrumb}
        </div>
      )}

      <div className="main-header">
       
        <h1 className="page-title">Temporary Bus Pass Request</h1>
        {showClockIcon && (
          <div className="clock-icon" onClick={onClockClick}>
            <AccessAlarmIcon />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
