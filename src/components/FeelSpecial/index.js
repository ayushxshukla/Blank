import React from "react";
import Button from "../common/Button";
import "./whatIsBlank.css";

const WhatIsBlank = () => {
  return (
    <div className="feel-special photo-section">
      <div className="max-width">
        <div className="photo-section-child">
          <div className="photo-section-top dynamic-margin">
            <div className="photo-section-heading">
            BLANK
            </div>
            <div className="photo-section-subheading">
              no more
            </div>
          </div>
          <div className="photo-section-bottom dynamic-margin">
            <div className="photo-section-description">
            I understand gaming is nice, it's great even but I want to put this out there, it’s not the act of gaming but the in-betweens that we spend together as strangers-turned-friends. Can we romantacise this like we do with playing sports and cooking together because if there's one this I have learned here is that Blank has always been about developing trust, sharing common interests, and working together as friends, but most importantly growing together.

            Where there was a 'blank' canvas is now a second home to all of us; both our safe space, and our biggest adventure.
            </div>
            {/* <div className="photo-section-button"> */}
              {/* <Button buttonText="Explore rewards" /> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIsBlank;
