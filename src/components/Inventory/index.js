import React from "react";
import "./brandsLove.css";

const Inventory = (props) => {
  return (
    <div id="ourinventory">
      <div className="brands-love">
      <div className="max-width">
        <div className="brands-love-heading">{props.text}</div>
        {/* <div className="brands-love-banner"></div> */}
      </div>
    </div>
    </div>
    
  );
};

export default Inventory;
