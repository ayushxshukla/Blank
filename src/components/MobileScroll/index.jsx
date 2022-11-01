import React, { useState } from "react";
import "./mobileScroll.css";
import ScreenText from "./ScreenText";
import Pain from "../../common/images/Pain.png"
import Wayne from "../../common/images/Wayne.jpg"
import Titan from "../../common/images/Titan.jpg"
import Senpai from "../../common/images/Senpai.jpeg"
import Daaku from "../../common/images/Daaku.jpeg"
import X from "../../common/images/X.jpeg"
import Venom from "../../common/images/Venom2.jpeg"
import Flex from "../../common/images/flex.jpeg"
import Spiron from "../../common/images/Spiron.jpeg"
import Groove from "../../common/images/Groove.jpeg"

const scrollData = [
  {
    heading: "titan.",
    description:
      `Arpit Sharma `,
    sub:
      "one of the two people in Bareilly"
    ,
    mobile_img:
      Titan,
  },
  {
    heading: "senpai.",
    description:
      "Raunak Ranjan",
      sub:
      "sin π"
    ,
    mobile_img:
      Senpai,
  },
  {
    heading: "daaku.",
    description:
      "Divyansh Sharma",
      sub:
      "that can't rob victories for us"
    ,
    mobile_img:
      Daaku,
  },
  
  {
    heading: "wayne.",
    description:
      "Shreyansh Gupta",
      sub:
      "Martha Wayne"
    ,
    mobile_img:
      Wayne,
  },
  {
    heading: "pain.",
    description:
      "Ayush Shukla",
      sub:
      "too literal while naming"
    ,
    mobile_img:
      Pain,
  },
  {
    heading: "groove.",
    description:
      "Arnav Pant",
      sub:
      "The other guy from Bareilly"
    ,
    mobile_img:
      Groove,
  },
 
  {
    heading: "spiron.",
    description:
      "Ishan Sharma",
      sub:
      `"Spiron Go Back!"- Gandhiji `
    ,
    mobile_img:
      Spiron,
  },
  {
    heading: "x.",
    description:
      "Shivendra Singh",
      sub:
      "mehnat karke 'w' ban jaayega" 
    ,
    mobile_img:
      X,
  },
 
  {
    heading: "venom.",
    description:
      "Ayan Yadav ",
      sub:
      
      "Release date: 5 October 2018"
    ,
    mobile_img:
      Venom,
  },
  {
    heading: "flexOP.",
    description:
      "Tushar Agrawal ",
      sub:
      "not to be confused with Baba Ramdev"
    ,
    mobile_img:
      Flex,
  },

  
  

  
];

const MobileScroll = () => {
  const [currentImg, setCurrentImg] = useState(0);
  return (
    <div className="mobile-scroll flex max-width">

      <div className="scroll-full-screen-wrapper">
        {scrollData.map((screen, i) => (
          <div className="scroll-full-screen">
            <ScreenText screen={screen} setCurrentImg={setCurrentImg} i={i} />
          </div>
        ))}
      </div>
      <div className="mobile-mockup-wrapper non-mobile">
        <div className="mobile-mockup ">
          <div className="mobile-mockup-screen flex absolute-center">
            <img
              src={scrollData[currentImg].mobile_img}
              className="mobile-screen-img slide-in-right "
              key={scrollData[currentImg].mobile_img}
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileScroll;
