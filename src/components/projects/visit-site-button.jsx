// VisitSiteButton.js
import React from "react";
import "../../css/VisitSiteButton.css"; // Ensure this path is correct based on your project structure

const VisitSiteButton = ({ siteLink }) => {
  return (
    <a
      href={siteLink}
      target="_blank"
      rel="noopener noreferrer"
      className="visit-site-link"
    >
      <button className="visit-site-button">Visit Site</button>
    </a>
  );
};

export default VisitSiteButton;
