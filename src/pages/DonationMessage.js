import React from "react";
import "./donationMessage.css";

const DonationMessage = () => {
  return (
    <div className="donation-message">
      <h2 className="donation-title">Make a Difference Today</h2>
      <p className="donation-text">
        Your generous donations can transform lives. Whether it's a warm coat
        for a child, a meal for a family, or a laptop for a student, every item
        you donate brings hope and a brighter future to those in need. Join us
        in making a meaningful impact by donating today. Together, we can create
        a world where everyone has what they need to thrive.
      </p>
      <button className="donate-button"><a href="./Donate">Donate Now</a></button>
    </div>
  );
};

export default DonationMessage;
