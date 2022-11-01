import React from "react";
import Button from "../common/Button";
import "./whatIsThis.css";

const WhatIsThis = () => {
  return (
    <div className="cred-experience photo-section" >
      <div className="max-width">
        <div className="photo-section-child">
          <div className="photo-section-top">
            <div className="photo-section-heading cred-experience-heading">
            This is an ode
            </div>
            <div className="photo-section-subheading">
             to all gamers
            </div>
          </div>
          <div className="photo-section-bottom">
            <div className="photo-section-description cred-experience-description">
                This website is nothing but a small homage to these people who gifted me with so much love. 
                Without these names Blank would just be... Blank.
                So, if you're still reading, take this as a reminder to tell someone close to you how much their presence means to you. 
            </div>
            {/* <div className="photo-section-button">
              <Button buttonText="But who are we really?" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIsThis;
