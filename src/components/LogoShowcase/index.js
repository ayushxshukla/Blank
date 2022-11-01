import React,{useState,useRef,useEffect} from 'react'
import "./productShowcase.css";
import one from "../../common/images/one.png"
import two from "../../common/images/two.png"
import three from "../../common/images/third.png"
import four from "../../common/images/four.png"
import five from "../../common/images/five.png"

const LogoShowcase = () => {


    const [showAnimation, setShowAnimation] = useState(false);
    const ref = useRef(null);
  
    const toggleAnimation = (e) => {
      if (e[0]?.isIntersecting) {
        setShowAnimation(true);
      }
    };
  
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
  
    useEffect(() => {
      const observer = new IntersectionObserver(toggleAnimation, options);
      if (!showAnimation) {
        if (ref.current) {
          observer.observe(ref.current);
        }
      }
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    });
  return (
    <div className={`product-showcase`} ref={ref}>
        {showAnimation && (

        <div className={`showcase-wrapper ${showAnimation && "scale-in-bottom" }  `}>
            <img src={one} alt="img" className='showcase-ui showcase-mockup-1'/>
            <img src={two} alt="img" className='showcase-ui showcase-mockup-2'/>
            <img src={three} alt="img" className='showcase-ui showcase-mockup-3'/>
            <img src={four} alt="img" className='showcase-ui showcase-mockup-4'/>
            <img src={five} alt="img" className='showcase-ui showcase-mockup-5'/>
        </div>
        )}
    </div>
  )
}

export default LogoShowcase