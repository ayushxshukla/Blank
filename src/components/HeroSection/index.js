import React from "react";
import Button from "../common/Button";
import "./heroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section-wrapper">
      
      <div className="flex flex-col absolute-center hero-section max-width">
        <div className="hero-heading">
          B L A N K
        </div>
        <div className="hero-subheading">
        "The enemy team outnumbers us 4 to 1!" <br></br> "Then it is an even fight."
        </div>
        {/* <Button buttonText="⬛" color="#01FFEE"/> */}
      </div>
    </div>
  );
};

export default HeroSection;
