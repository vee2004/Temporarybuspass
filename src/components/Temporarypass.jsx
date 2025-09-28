import React, { useState, useEffect } from 'react';
import calendarIcon from '../assets/Right Content (1).svg';
import vector from '../assets/Vector.svg';
import pinboardIcon from '../assets/pinboard.svg';
// Using require to handle the space in the filename
import closeIcon from '../assets/Vector (2).svg';
import beakIcon from '../assets/Beak (Stroke).svg';

import "../styles/Temporarypass.css";

// Format date to DD-MMM-YYYY (e.g., 24-May-2025)
const formatDateForDisplay = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

// Parse date from DD-MMM-YYYY to YYYY-MM-DD for input
const parseDateForInput = (displayDate) => {
  if (!displayDate) return '';
  const [day, month, year] = displayDate.split('-');
  const monthIndex = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].indexOf(month);
  const date = new Date(year, monthIndex, day);
  return date.toISOString().split('T')[0];
};

export default function BusBooking() {
  const [serviceType, setServiceType] = useState("pickup");
  const [pickArea, setPickArea] = useState("");
  const [pickupPoint, setPickupPoint] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [displayPickupDate, setDisplayPickupDate] = useState("");
  const [displayReturnDate, setDisplayReturnDate] = useState("");
  const [isReturn, setIsReturn] = useState(false);
  const [showNote, setShowNote] = useState(false);

  // Note content with exact text from design
  const noteContent = (
    <div className="note-text">
    <ul>
      <li>Temporary pass can be requested for <strong>Four trips per calendar month</strong>.</li>
      <li>Boarding and de-boarding to be done from selected point only.</li>
      <li>It is mandatory to swipe while boarding & de-boarding.</li>
      <li>You can book a temporary bus pass for <strong>5:00 PM</strong>, <strong>5:45 PM</strong> or <strong>6:30 PM</strong> today, but only before those times.</li>
    </ul>
  </div>
  );

  // Toggle note visibility
  const toggleNote = () => {
    setShowNote(!showNote);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      serviceType,
      pickArea,
      pickupPoint,
      pickupDate,
      returnDate: isReturn ? returnDate : null,
    });
  };

  const areas = [
    "Select Area",
    "Ashok Nagar",
    "BTM Layout",
    "Indiranagar",
    "Koramangala",
    "Whitefield"
  ];

  const pickupPoints = [
    "Select Pickup Point",
    "The Cycle Place - A3 - MS Palya",
    "Metro Station - BTM",
    "Indiranagar Signal",
    "Koramangala Water Tank",
    "Whitefield ITPL"
  ];

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

  const handlePickupDateChange = (e) => {
    const value = e.target.value;
    setPickupDate(value);
    setDisplayPickupDate(formatDateForDisplay(value));
    if (returnDate && new Date(value) > new Date(returnDate)) {
      setReturnDate('');
      setDisplayReturnDate('');
    }
  };

  const handleReturnDateChange = (e) => {
    const value = e.target.value;
    setReturnDate(value);
    setDisplayReturnDate(formatDateForDisplay(value));
  };

  useEffect(() => {
    if (pickupDate) setDisplayPickupDate(formatDateForDisplay(pickupDate));
    if (returnDate) setDisplayReturnDate(formatDateForDisplay(returnDate));
  }, [pickupDate, returnDate]);

  return (
    <div className="bus-booking-container">
      <div className="pinboard-container">
        <img 
          src={pinboardIcon} 
          alt="Info" 
          className="pinboard-icon"
          onClick={toggleNote}
        />
        
        {/* Beak icon - shows when popup is displayed */}
        {showNote && (
          <img 
            src={beakIcon} 
            alt="Beak" 
            className="beak-icon"
          />
        )}
        
        {/* Note Popup - Positioned below the pinboard icon */}
        {showNote && (
          <div className="note-popup">
          <div className="note-content">
            <div className="note-header">
              <h4>Note:</h4>
              <button className="close-note" onClick={toggleNote}>
                <img src={closeIcon} alt="Close" width="16" height="16" />
              </button>
            </div>
            {noteContent}
          </div>
        </div>
        )}
      </div>

      <div className="booking-card">
        <div className="card-header">
          <h2>Service Required For</h2>
          <div className="trip-info">
            <span>Trip Availed - <strong>0</strong></span>
            <span>Balance Trips - <strong>4</strong></span>
          </div>
        </div>

        <div className="booking-form">
          {/* Radio Buttons */}
          <div className="radio-group">
            <label className="form-radio">
              <input
                type="radio"
                name="serviceType"
                value="pickup"
                checked={serviceType === "pickup"}
                onChange={() => setServiceType("pickup")}
              />
              <span className="radio-btn"></span>
              <span className="radio-label">Pickup</span>
            </label>
            <label className="form-radio">
              <input
                type="radio"
                name="serviceType"
                value="drop"
                checked={serviceType === "drop"}
                onChange={() => setServiceType("drop")}
              />
              <span className="radio-btn"></span>
              <span className="radio-label">Drop</span>
            </label>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="pickArea">
                  {serviceType === "pickup" ? "Pick" : "Drop"} Area <span className="required-asterisk">*</span>
                </label>
                <select
                  id="pickArea"
                  className="form-control"
                  value={pickArea}
                  onChange={(e) => setPickArea(e.target.value)}
                  required
                >
                  {areas.map((area, index) => (
                    <option key={index} value={area} disabled={index === 0}>
                      {area}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="pickupPoint">
                  {serviceType === "pickup" ? "Pickup" : "Drop"} Point <span className="required-asterisk">*</span>
                </label>
                <select
                  id="pickupPoint"
                  className="form-control"
                  value={pickupPoint}
                  onChange={(e) => setPickupPoint(e.target.value)}
                  required
                >
                  {pickupPoints.map((point, index) => (
                    <option key={index} value={point} disabled={index === 0}>
                      {point}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="pickupDate">
                  {serviceType === "pickup" ? "Pickup" : "Drop"} Required For <span className="required-asterisk">*</span>
                </label>
                <div className="date-input-wrapper">
                  <input
                    id="pickupDate"
                    type="date"
                    className="form-control"
                    value={pickupDate}
                    min={today}
                    onChange={handlePickupDateChange}
                    required
                  />
                  <img 
                    src={calendarIcon} 
                    alt="vector" 
                    className="calendar-icon"
                    width="13.25"
                    height="6.63"
                  />
                  <input type="hidden" name="formattedPickupDate" value={displayPickupDate} />
                </div>
              </div>

              {isReturn && (
                <div className="form-group">
                  <label htmlFor="returnDate">
                    Return Date <span className="required-asterisk">*</span>
                  </label>
                  <div className="date-input-wrapper">
                    <input
                      id="returnDate"
                      type="date"
                      className="form-control"
                      value={returnDate}
                      min={pickupDate || today}
                      onChange={handleReturnDateChange}
                      required={isReturn}
                    />
                    <img 
                      src={calendarIcon} 
                      alt="Calendar" 
                      className="calendar-icon"
                      width="20"
                      height="20"
                    />
                    <input type="hidden" name="formattedReturnDate" value={displayReturnDate} />
                  </div>
                </div>
              )}
            </div>

            <div className="form-group submit-btn">
              <button type="submit" className="btn-submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
