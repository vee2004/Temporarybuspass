import React from "react";

const NotificationIcon = ({ width = 13, height = 15, className = "" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 13 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <mask
        id="mask0_354_12607"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="13"
        height="15"
      >
        <path d="M0.5 0.5H12.75V14.5H0.5V0.5Z" fill="white" />
      </mask>
      <g mask="url(#mask0_354_12607)">
        <mask
          id="mask1_354_12607"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="13"
          height="15"
        >
          <path d="M0.5 0.5H12.75V14.5H0.5V0.5Z" fill="white" />
        </mask>
        <g mask="url(#mask1_354_12607)">
          <path
            d="M6.62355 14.5C7.46861 14.5 8.15409 13.7166 8.15409 12.75H5.09302C5.09302 13.7166 5.7785 14.5 6.62355 14.5ZM11.7769 10.4063C11.3147 9.8387 10.4497 8.98476 10.4497 6.1875C10.4497 4.06289 9.14628 2.36211 7.38869 1.94484V1.375C7.38869 0.891836 7.04608 0.5 6.62355 0.5C6.20102 0.5 5.85841 0.891836 5.85841 1.375V1.94485C4.10082 2.36211 2.79734 4.06289 2.79734 6.1875C2.79734 8.98476 1.93242 9.8387 1.47018 10.4063C1.32662 10.5827 1.26298 10.7936 1.26418 11C1.26681 11.4484 1.57473 11.875 2.03219 11.875H11.2149C11.6723 11.875 11.9805 11.4484 11.9829 11C11.9841 10.7936 11.9205 10.5824 11.7769 10.4063Z"
            fill="#6B7280"
          />
        </g>
      </g>
    </svg>
  );
};

export default NotificationIcon;
