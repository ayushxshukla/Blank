import React from "react";
import Button from "../common/Button";
import "./finalSlide.css";

const FinalSlide = () => {
  return (
    <div className="cred-security photo-section">
      <div className="max-width">
        <div className="photo-section-child">
          <div className="photo-section-top dynamic-margin">
            <div className="photo-section-heading">
              where to next?
            </div>
            <div className="photo-section-subheading">

            </div>
          </div>
          <div className="photo-section-bottom dynamic-margin">
            <div className="photo-section-description">
              Don't know what the future holds for us. Life's been a lot of things lately. Fast. Erratic. You know.. life.  All of us are on seperate roads but all I know is that the last chapter hasn’t even been written yet. The future is uncertain but I know, in some way and form, we'll stay together. Right? 
            </div>
            {/* <div className="photo-section-button">
              <Button buttonText="Always" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalSlide;
